import { z } from "zod";

export const schema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export type FormData = z.infer<typeof schema>;
