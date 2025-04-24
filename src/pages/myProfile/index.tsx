import { DeashBoardOptions } from "../../components/dashboardOptions";
import * as S from "./styleds";

export const MyProfile = () => {
  return (
    <S.Container>
      <DeashBoardOptions />
      <S.ProfileContent>
        <S.Input />
        <S.Input />
        <S.Input />
        <S.Input />
        <S.Input />
      </S.ProfileContent>
    </S.Container>
  );
};
