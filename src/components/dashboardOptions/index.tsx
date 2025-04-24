import { useNavigate } from "react-router-dom";
import * as S from "./styleds";
import { FaEye, FaHome, FaPlus, FaUser } from "react-icons/fa";

export const DeashBoardOptions = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Ul>
        <S.Li onClick={() => navigate("/")}>
          <FaHome />
          <S.Text>Início</S.Text>
        </S.Li>
        <S.Li>
          <FaUser />
          <S.Text onClick={() => navigate("/myprofile")}>Meu Perfil</S.Text>
        </S.Li>
        <S.Li onClick={() => navigate("/dashboard")}>
          <FaPlus />
          <S.Text>Adicionar produtos</S.Text>
        </S.Li>
        <S.Li onClick={() => navigate("/myproducts")}>
          <FaEye />
          <S.Text>Meus produtos</S.Text>
        </S.Li>
      </S.Ul>
    </S.Container>
  );
};
