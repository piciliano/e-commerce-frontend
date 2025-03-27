import styled from "styled-components";
import theme from "../../styles/theme";

export const FormContainer = styled.div`
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid ${theme.colors.backgroundColor.DarkMagenta};
  font-size: 1rem;
  color: ${theme.textColor.primary};
  background-color: #fff;
  outline: none;
  transition: 0.3s ease-in-out;

  &:focus {
    border-color: ${theme.colors.backgroundColor.RoyalBlue};
    box-shadow: 0 0 5px ${theme.colors.backgroundColor.RoyalBlue};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: ${theme.colors.backgroundColor.DarkMagenta};
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.backgroundColor.SlateBlue};
  }

  &:active {
    background-color: ${theme.colors.backgroundColor.DarkMagenta};
  }
`;

export const Title = styled.h2`
  color: ${theme.colors.backgroundColor.DarkMagenta};
`;

export const loginLink = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-style: italic;
`;
