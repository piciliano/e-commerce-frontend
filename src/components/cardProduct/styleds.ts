import styled from "styled-components";

export const Container = styled.div`
  width: 18.75rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 20rem;
    &:hover {
      transform: none;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: white;
`;

export const Content = styled.div`
  padding: 16px;
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

export const Button = styled.button`
  width: 80%;
  padding: 10px;
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #6f1bb5;
  }
`;

export const ButtonCart = styled.button`
  width: 50px;
  height: 50px;
  background-color: #8a2be2;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #6f1bb5;
  }
`;

export const ButtonsContent = styled.div`
  display: flex;
  gap: 5%;
  justify-content: right;
`;
