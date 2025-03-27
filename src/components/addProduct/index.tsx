import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styleds";

const schemaAddProduct = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
  description: z
    .string()
    .min(5, "A descrição deve ter pelo menos 5 caracteres"),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Preço inválido")
    .min(1, "O preço é obrigatório"),
});

export type AddProductFormData = z.infer<typeof schemaAddProduct>;

export const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductFormData>({
    resolver: zodResolver(schemaAddProduct),
  });

  const onSubmit = (data: AddProductFormData) => {
    console.log("Produto adicionado:", data);
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <title>Adicionar Produto</title>

        <div>
          <input
            type="text"
            placeholder="Título do produto"
            {...register("title")}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Descrição do produto"
            {...register("description")}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        <div>
          <input type="text" placeholder="Preço" {...register("price")} />
          {errors.price && <span>{errors.price.message}</span>}
        </div>

        <button type="submit">Adicionar Produto</button>
      </form>
    </S.Container>
  );
};
