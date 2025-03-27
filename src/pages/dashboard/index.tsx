import { AddProduct } from "../../components/addProduct";
import * as S from "./styleds";

export const DashBoard = () => {
  return (
    <S.Container>
      <S.ContLeft>
        <S.Ul>
          <S.Li>Meu Perfil</S.Li>
          <S.Li>Gerenciar produtos</S.Li>
        </S.Ul>
      </S.ContLeft>
      <S.ContRight>
        <AddProduct />
      </S.ContRight>
    </S.Container>
  );
};
