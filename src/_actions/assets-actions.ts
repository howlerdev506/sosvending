"use server";

export const createAsset = async (formData: FormData) => {
    try {
    //   const data = await signIn("credentials", { <<======== llamado
    //     email: credentials.email,
    //     password: credentials.password,
    //     redirect: false,
    //   }    );
    
    const data = {
      id: formData.get("idmaquina"),
      name: formData.get("name"),
      provider: formData.get("proveedor"),
      type: formData.get("tipomaquina"),
    };
  
      console.log({ res : data });
  
      return { success: true };
    } catch (error) {

      return { error: "error 500" };
    }
  };