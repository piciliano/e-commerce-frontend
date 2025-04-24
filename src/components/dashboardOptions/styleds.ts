import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 15%;
  background-color: rgb(108, 27, 119);
  color: white;
  box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0.09rem;
  }
`;

export const Li = styled.li`
  list-style-type: none;
  padding: 1rem;
  background-color: rgb(155, 26, 155);
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  padding-left: 2rem;

  &:hover {
    background-color: rgb(164, 43, 175);
    transform: scale(1.01);
  }
  border-bottom: 1px solid black;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.8rem;
    width: 30%;
    justify-content: center;
  }
`;

export const Text = styled.span`
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
