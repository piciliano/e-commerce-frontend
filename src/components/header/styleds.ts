import styled from "styled-components";
import theme from "../../styles/theme";

type isOpenType = {
  isOpen: boolean;
};

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.backgroundColor.DarkMagenta};
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ImgHeader = styled.img`
  width: 70px;
`;

export const InputHeader = styled.input`
  border: 1px solid gray;
  padding: 0.4rem 2rem 0.4rem 0.6rem;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #fff;
  outline: none;
  transition: 0.3s ease-in-out;
  width: 30%;

  background-image: url("https://cdn-icons-png.flaticon.com/512/622/622669.png");
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: right 10px center;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LoginButton = styled.button`
  border: 1px solid violet;
  padding: 3px;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CartIcon = styled.img`
  width: 25px;
  filter: brightness(0) invert(1);
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 4px 8px;
  min-width: 20px;
  text-align: center;
`;

export const UserName = styled.h3`
  color: white;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ButtonPainel = styled.button`
  background-color: transparent;
  cursor: pointer;
  padding-top: 0.3rem;
  @media (max-width: 768px) {
    padding-top: 0.2rem;
  }
`;

export const ContFlexForButton = styled.div`
  display: flex;
  gap: 0.2rem;
  position: relative;
`;

export const ModalPainel = styled.div<isOpenType>`
  width: 10rem;
  position: absolute;
  top: 1.5rem;
  left: 5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background: linear-gradient(145deg, #f0f0f0, #d9d9d9);
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    left: 0.1rem;
    width: 7rem;
  }

  z-index: 1;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;

export const ButtonInPainel = styled.button`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  color: white;
  background-color: #8a2be2;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #7a1fe5;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;
    width: 5rem;
  }
`;
