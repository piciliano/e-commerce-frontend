import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
`;

export const ContainerProducts = styled.div`
  background-color: #f4f4f4;
  width: 100%;
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
