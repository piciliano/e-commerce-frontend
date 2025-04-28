import { useNavigate } from "react-router-dom";
import * as S from "./styleds";
import { useAddProductToCart } from "../../api/addProductToCart";
import { GiShoppingCart } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";
import { useDeleteProduct } from "../../api/deleteProduct";

export const CardProduct = ({
  image,
  title,
  description,
  price,
  id,
  cartIcon,
  trashIcon,
  itemId,
}: any) => {
  const { mutate } = useAddProductToCart();
  const { mutate: deleteProduct } = useDeleteProduct();

  const navigate = useNavigate();

  const handleAddToCart = () => {
    mutate(id);
  };

  const navigateToProduct = () => {
    navigate(`/products/${id}`);
  };

  const handleDelete = () => {
    deleteProduct(itemId);
  };

  return (
    <S.Container>
      <S.Image src={image} alt={title} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Price>R$ {price}</S.Price>
        <S.ButtonsContent>
          {cartIcon && (
            <>
              <S.Button onClick={navigateToProduct}>Comprar</S.Button>
              <S.ButtonCart onClick={handleAddToCart}>
                <GiShoppingCart size={24} color="#fff" />
              </S.ButtonCart>
            </>
          )}
          {trashIcon && (
            <>
              <FaTrash
                style={{ cursor: "pointer" }}
                size={24}
                color="#ff0000"
                onClick={handleDelete}
              />
            </>
          )}
        </S.ButtonsContent>
      </S.Content>
    </S.Container>
  );
};
