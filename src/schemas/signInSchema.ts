import { z } from "zod";

export const schemaSignIn = z
  .object({
    name: z.string().min(4, "O nome deve ter pelo menos 4 caracteres"),
    email: z.string().email("E-mail inválido"),
    phone: z.string().min(10, "Digite um número de celular válido"),
    birth: z.string().min(8, "Digite uma data válida"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A confirmação deve ter pelo menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type SignInFormData = z.infer<typeof schemaSignIn>;
