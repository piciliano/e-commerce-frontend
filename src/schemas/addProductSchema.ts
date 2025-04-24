import { z } from "zod";
import { Category } from "../enums/categoryEnum";

export const schemaAddProduct = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres."),
  description: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres."),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Digite um preço válido."),
  quantity: z.coerce
    .number()
    .int("A quantidade deve ser um número inteiro.")
    .min(1, "A quantidade deve ser maior que zero."),
  category: z.enum([
    Category.Acessorios,
    Category.Moda,
    Category.Alimentacao,
    Category.ModaPet,
    Category.Games,
    Category.Academia,
    Category.Eletronicos,
  ]),
});

export type AddProductFormData = z.infer<typeof schemaAddProduct>;
