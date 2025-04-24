import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const InputText = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  min-height: 100px;
  font-size: 16px;
  resize: vertical;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

export const Star = styled.span<{ $filled: boolean }>`
  font-size: 24px;
  cursor: pointer;
  color: ${({ $filled }) => ($filled ? "#FFD700" : "#ccc")};
  transition: color 0.3s;

  &:hover {
    color: #ffd700;
  }
`;

export const Button = styled.button`
  background-color: #6a1b9a;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #7b1fa2;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;
