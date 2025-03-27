import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

export const ContLeft = styled.div`
  width: 15%;
  background-color: rgb(108, 27, 119);
  color: white;
  box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.1);
`;

export const ContRight = styled.div`
  width: 85%;
  padding: 2rem;
  background-color: white;
  box-shadow: -4px 0px 6px rgba(0, 0, 0, 0.1);
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const Li = styled.li`
  list-style-type: none;
  padding: 1rem;
  background-color: rgb(155, 26, 155);
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgb(164, 43, 175);
    transform: scale(1.01);
  }
  border-bottom: 1px solid black;

  cursor: pointer;
`;
