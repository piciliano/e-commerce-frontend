import { BiCart } from "react-icons/bi";
import { getProductsInCartQuery } from "../../api/getProductsInCart";
import { useRemoveProductToCart } from "../../api/removeProductToCart";
import * as S from "./styleds";
import { MdDelete } from "react-icons/md";

export const CartContent = () => {
  const { data, isLoading, isError } = getProductsInCartQuery();
  const { mutate: removeProduct } = useRemoveProductToCart();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  const handleRemoveProduct = (id: string) => {
    removeProduct(id);
  };

  return (
    <S.Container>
      <S.Content>
        {data?.products?.map((product) => (
          <S.ProductContainer key={product.id}>
            <S.ContainerProductsDetails>
              <S.Title>{product.title}</S.Title>
              <S.Description>{product.description}</S.Description>
              <S.Price>R${product.price}</S.Price>
            </S.ContainerProductsDetails>
            <S.ConfirmTrashButton
              onClick={() => handleRemoveProduct(product.id)}
            >
              <MdDelete style={{ color: "white", fontSize: "24px" }} />
            </S.ConfirmTrashButton>
          </S.ProductContainer>
        ))}
        {data?.totalPrice && parseFloat(data.totalPrice) > 0 ? (
          <S.ContentPriceConfirm>
            <S.TotalPrice>Total: R${data?.totalPrice}</S.TotalPrice>
            <S.Confirm>Finalizar Compra</S.Confirm>
          </S.ContentPriceConfirm>
        ) : (
          <S.NoContentContainer>
            <BiCart size={70} color="#8a2be2" />
            <S.NoContentText>Seu carrinho está vazio</S.NoContentText>
          </S.NoContentContainer>
        )}
      </S.Content>
    </S.Container>
  );
};
