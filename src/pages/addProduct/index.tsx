import { AddPhoto } from "../../components/addPhotoInProduct";
import { AddProduct } from "../../components/addProduct";
import * as S from "./styleds";
import { FcAddImage } from "react-icons/fc";
import { DeashBoardOptions } from "../../components/dashboardOptions";
import { useState } from "react";

export const DashBoard = () => {
  const [render, setRender] = useState(true);

  return (
    <S.Container>
      <DeashBoardOptions />
      <S.ContRightAddProduct>
        <AddProduct setRender={setRender} />
        <FcAddImage size={75} />
        <AddPhoto render={render} setRender={setRender} />
      </S.ContRightAddProduct>
    </S.Container>
  );
};
