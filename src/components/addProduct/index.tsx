import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styleds";
import {
  AddProductFormData,
  schemaAddProduct,
} from "../../schemas/addProductSchema";
import { useAddProduct } from "../../api/addProduct";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface AddProductProps {
  setRender: Dispatch<SetStateAction<boolean>>;
}

export const AddProduct = ({ setRender }: AddProductProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddProductFormData>({
    resolver: zodResolver(schemaAddProduct),
  });

  const navigate = useNavigate();

  const { mutate, isError, isSuccess } = useAddProduct();

  const onSubmit = (data: AddProductFormData) => {
    const productData = {
      ...data,
      price: data.price.replace(",", "."),
      quantity: Number(data.quantity),
    };
    mutate(productData);
    reset();
    setTimeout(() => setRender(false), 1500);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Adicionar Produto</S.Title>

        <S.FormGroup>
          <S.Label>Título do Produto</S.Label>
          <S.Input
            type="text"
            placeholder="Ex: Camiseta Premium"
            {...register("title")}
            $hasError={!!errors.title}
          />
          {errors.title && <S.Error>{errors.title.message}</S.Error>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>Descrição</S.Label>
          <S.Input
            type="text"
            placeholder="Ex: Camiseta 100% algodão..."
            {...register("description")}
            $hasError={!!errors.description}
          />
          {errors.description && (
            <S.Error>{errors.description.message}</S.Error>
          )}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>Categoria</S.Label>
          <S.Select {...register("category")} $hasError={!!errors.category}>
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

        <S.FormRow>
          <S.FormGroup style={{ flex: 1 }}>
            <S.Label>Preço</S.Label>
            <S.Input
              type="text"
              inputMode="decimal"
              placeholder="Ex: 19,99"
              {...register("price")}
              $hasError={!!errors.price}
            />
            {errors.price && <S.Error>{errors.price.message}</S.Error>}
          </S.FormGroup>

          <S.FormGroup style={{ flex: 1 }}>
            <S.Label>Quantidade</S.Label>
            <S.Input
              type="number"
              placeholder="Ex: 10"
              min="1"
              {...register("quantity")}
              $hasError={!!errors.quantity}
            />
            {errors.quantity && <S.Error>{errors.quantity.message}</S.Error>}
          </S.FormGroup>
        </S.FormRow>

        <S.ButtonContainer>
          <S.SubmitButton type="submit">Adicionar Produto</S.SubmitButton>
          <S.CancelButton type="button" onClick={() => navigate("/")}>
            Cancelar
          </S.CancelButton>
        </S.ButtonContainer>

        {isError && (
          <S.ErrorMessage>
            Erro ao adicionar o produto. Tente novamente.
          </S.ErrorMessage>
        )}
        {isSuccess && (
          <S.SuccessMessage>Produto adicionado com sucesso!</S.SuccessMessage>
        )}
      </S.Form>
    </S.Container>
  );
};
