"use server";

import { SignJWT , jwtVerify } from "jose";
import { signIn } from "../../auth";
import { prisma as db } from "@/lib/prisma";
import { loginSchema, registerSchema } from "@/lib/zod";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { z } from "zod";

const secret = process.env.NEXTAUTH_SECRET;
const key = new TextEncoder().encode(secret);

export const encrypt = async(payload: any) => {
  return await new SignJWT(payload)
  .setProtectedHeader({ alg: "HS256" })
  .setIssuedAt()
  .setExpirationTime("3h")
  .sign(key);
}

export const decrypt = async (input: string): Promise<any> => {
  const { payload } = await jwtVerify(input, key,{
    algorithms: ["HS256"],
  });
  return payload;
}
export const loginAction = async (credentials: z.infer<typeof loginSchema>) => {
  try {
    const data = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });

    console.log({ res : data });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "error 500" };
  }
};

export const registerAction = async (
  values: z.infer<typeof registerSchema>
) => {
  try {
    const { data, success } = registerSchema.safeParse(values);
     if (!success) {
      return {
        error: "Invalid data",
      };
    }
    console.log("sending data to db");
    console.log({data});

    // verificar si el usuario ya existe
    const user = await db.user.findUnique({
      where: {
        email: data.email,
      },
      include: {
        accounts: true, // Incluir las cuentas asociadas
      },
    });

    console.log({user});

    if (user) {
      // Verificar si tiene cuentas OAuth vinculadas
      const oauthAccounts = user.accounts.filter(
        (account) => account.type === "oauth"
      );
      if (oauthAccounts.length > 0) {
        return {
          error:
            "To confirm your identity, sign in with the same account you used originally.",
        };
      }
      return {
        error: "User already exists",
      };
    }

    // hash de la contraseña
    const passwordHash = await bcrypt.hash(data.password, 10);

    // crear el usuario
    await db.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: passwordHash,
      },
    });

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "error 500" };
  }
};