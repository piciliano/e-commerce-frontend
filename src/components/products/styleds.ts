import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
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

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  button {
    background-color: #8a2be2;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;
