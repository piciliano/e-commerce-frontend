import * as S from "./styleds";
import ImgContent from "./../../images/ecommerceHD.png";
import { LoginForm } from "../../components/loginForm";

export const Login = () => {
  return (
    <S.LoginContainer>
      <S.LeftContent>
        <S.ImgLeftContent src={ImgContent} alt="imagem de conteúdo" />
      </S.LeftContent>
      <S.RightContent>
        <LoginForm />
      </S.RightContent>
    </S.LoginContainer>
  );
};
