import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  &[type="number"] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &:focus {
    border-color: #8a2be2;
    outline: none;
  }

  &::placeholder {
    color: #888;
  }

  @media (max-width: 768px) {
    padding: 0.4rem;
  }
`;

export const Select = styled.select`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
`;

export const Option = styled.option``;

export const Error = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const Success = styled.span`
  color: green;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const SubmitButton = styled.button`
  background: #8a2be2;
  color: #fff;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #6a1bbd;
  }
`;
