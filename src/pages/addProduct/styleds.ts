import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContRightAddProduct = styled.div`
  width: 85%;
  padding: 2rem;
  background-color: white;
  box-shadow: -4px 0px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;

export const ContRightGetMyProducts = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1``;

export const ContentMyProducts = styled.div``;
