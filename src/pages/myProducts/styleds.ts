import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ContainerProducts = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  height: 93.5vh;
`;

export const ProductGrid = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px 30px;
  justify-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 15px 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px 20px;
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
    height: 88vh;
  }
`;

export const NoContentText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-top: 10px;
`;
