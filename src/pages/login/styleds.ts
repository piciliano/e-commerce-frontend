import styled from "styled-components";

export const LoginContainer = styled.div`
  /* background-color: ${(props) =>
    props.theme.colors.backgroundColor.primary}; */
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const LeftContent = styled.div`
  width: 90%;
  height: 100%;
  background: linear-gradient(
    8deg,
    rgba(2, 0, 36, 1) 0%,
    rgb(152, 67, 145) 77%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgLeftContent = styled.img`
  object-fit: contain;
  width: 50%;
`;
