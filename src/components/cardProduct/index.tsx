import { useNavigate } from "react-router-dom";
import * as S from "./styleds";
import { useAddProductToCart } from "../../api/addProductToCart";
import { GiShoppingCart } from "react-icons/gi";

export const CardProduct = ({ image, title, description, price, id }: any) => {
  const { mutate, data, error } = useAddProductToCart();

  const navigate = useNavigate();

  const handleAddToCart = () => {
    mutate(id);
  };

  const navigateToProduct = () => {
    navigate(`/products/${id}`);
  };

  return (
    <S.Container>
      <S.Image src={image} alt={title} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Price>R$ {price}</S.Price>
        <S.ButtonsContent>
          <S.Button onClick={navigateToProduct}>Comprar</S.Button>
          <S.ButtonCart onClick={handleAddToCart}>
            <GiShoppingCart size={24} color="#fff" />
          </S.ButtonCart>
        </S.ButtonsContent>
      </S.Content>
    </S.Container>
  );
};
