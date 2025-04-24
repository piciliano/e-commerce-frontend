import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styleds";
import {
  AddProductFormData,
  schemaAddProduct,
} from "../../schemas/addProductSchema";
import { useAddProduct } from "../../api/addProduct";
import { Dispatch, SetStateAction } from "react";

interface AddProductProps {
  setRender: Dispatch<SetStateAction<boolean>>;
}

export const AddProduct = ({ setRender }: AddProductProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductFormData>({
    resolver: zodResolver(schemaAddProduct),
  });

  const { mutate, isError, isSuccess } = useAddProduct();

  const onSubmit = (data: AddProductFormData) => {
    const productData = {
      title: data.title,
      description: data.description,
      price: data.price.toString(),
      quantity: Number(data.quantity),
      category: data.category,
    };

    mutate(productData);

    setRender(false);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Adicionar Produto</S.Title>

        <S.FormGroup>
          <S.Input
            type="text"
            placeholder="Título do produto"
            {...register("title")}
          />
          {errors.title && <S.Error>{errors.title.message}</S.Error>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Input
            type="text"
            placeholder="Descrição do produto"
            {...register("description")}
          />
          {errors.description && (
            <S.Error>{errors.description.message}</S.Error>
          )}
        </S.FormGroup>

        <S.FormGroup>
          <S.Select {...register("category")}>
            <S.Option value="">Selecione uma categoria</S.Option>
            <S.Option value="acessorios">Acessórios</S.Option>
            <S.Option value="moda">Moda</S.Option>
            <S.Option value="alimentacao">Alimentação</S.Option>
            <S.Option value="moda_pet">Moda Pet</S.Option>
            <S.Option value="games">Games</S.Option>
            <S.Option value="academia">Academia</S.Option>
            <S.Option value="eletronicos">Eletrônicos</S.Option>
          </S.Select>
          {errors.category && <S.Error>{errors.category.message}</S.Error>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Input type="number" placeholder="Preço" {...register("price")} />
          {errors.price && <S.Error>{errors.price.message}</S.Error>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Input
            type="number"
            placeholder="Quantidade"
            {...register("quantity")}
          />
          {errors.quantity && <S.Error>{errors.quantity.message}</S.Error>}
        </S.FormGroup>

        <S.SubmitButton type="submit">Adicionar Produto</S.SubmitButton>
        {isError && <S.Error>Erro ao adicionar o produto</S.Error>}
        {isSuccess && <S.Success>Produto adicionado com sucesso!</S.Success>}
      </S.Form>
    </S.Container>
  );
};
