import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  gap: 20px;
  width: 70%;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }

  max-width: 1400px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductContainer = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #8a2be2;
  margin-bottom: 12px;
`;

export const TotalPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: rgb(226, 0, 57);
  margin-bottom: 12px;
`;

export const Confirm = styled.button`
  width: 150px;
  height: 35px;
  background-color: #8a2be2;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #6f1bb5;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(138, 43, 226, 0.5);
  }
`;

export const ContentPriceConfirm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

export const ContainerProductsDetails = styled.div``;

export const ConfirmTrashButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: rgb(206, 27, 27);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(221, 42, 42);
  }
`;

export const NoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 75vh;
  background-color: #f4f4f9;
  @media (max-width: 768px) {
    background-color: transparent;
  }
`;

export const NoContentText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-top: 10px;
`;
