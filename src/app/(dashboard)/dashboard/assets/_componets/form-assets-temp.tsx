"use client";

import { createAsstetSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { loginAction } from "@/_actions/auth-actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { FaGithub, FaGoogle } from "react-icons/fa6";
import ButtonSocial from "@/components/button-social";

interface FormCreateAssetProps {
  isVerified: boolean;
  OAuthAccountNotLinked: boolean;
}

const FormCreateAsset = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof createAsstetSchema>>({
    resolver: zodResolver(createAsstetSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createAsstetSchema>) {
    setError(null);
    startTransition(async () => {
      const response = await loginAction(values);
      if (response.error) {
        setError(response.error);
      } else {
        router.push("/dashboard");
      }
    });
  }

  return (
    <div className="max-w-52">
      <h1 className="mb-5 text-center text-2xl">Login</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <FormMessage>{error}</FormMessage>}
          <Button
            type="submit"
            disabled={isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
      <div className="mt-5 space-y-4">
        <ButtonSocial provider="github">
          <FaGithub className="mr-2 h-4 w-4" />
          <span>Sign in with Github</span>
        </ButtonSocial>
        <ButtonSocial provider="google">
          <FaGoogle className="mr-2 h-4 w-4" />
          <span>Sign in with Google</span>
        </ButtonSocial>
      </div>
    </div>
  );
};
export default FormCreateAsset;