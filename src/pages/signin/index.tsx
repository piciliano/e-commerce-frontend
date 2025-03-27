import * as S from "./styleds";
import ImgContent from "./../../images/ecommerceHD.png";
import { SigInForm } from "../../components/signInForm";

export const SignIn = () => {
  return (
    <S.SigninContainer>
      <S.LeftContent>
        <S.ImgLeftContent src={ImgContent} alt="imagem de conteúdo" />
      </S.LeftContent>
      <S.RightContent>
        <SigInForm />
      </S.RightContent>
    </S.SigninContainer>
  );
};
