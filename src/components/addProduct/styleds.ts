import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  width: 100%;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem auto;
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: #4a5568;
  font-weight: 500;
`;

interface InputProps {
  $hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ $hasError }) => ($hasError ? "#e53e3e" : "#e2e8f0")};
  border-radius: 8px;
  transition: all 0.3s;
  background-color: #f8fafc;
  color: #1a202c;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? "#e53e3e" : "#7c3aed")};
    box-shadow: 0 0 0 3px
      ${({ $hasError }) =>
        $hasError ? "rgba(229, 62, 62, 0.2)" : "rgba(124, 58, 237, 0.2)"};
    outline: none;
    background-color: #fff;
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

export const Select = styled.select<InputProps>`
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ $hasError }) => ($hasError ? "#e53e3e" : "#e2e8f0")};
  border-radius: 8px;
  background-color: #f8fafc;
  color: #1a202c;
  cursor: pointer;
  transition: all 0.3s;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? "#e53e3e" : "#7c3aed")};
    box-shadow: 0 0 0 3px
      ${({ $hasError }) =>
        $hasError ? "rgba(229, 62, 62, 0.2)" : "rgba(124, 58, 237, 0.2)"};
    outline: none;
    background-color: #fff;
  }
`;

export const Option = styled.option``;

export const Error = styled.span`
  color: #e53e3e;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SubmitButton = styled.button`
  background: #6f1bb5;
  color: #fff;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  flex: 1;

  &:hover {
    transform: translateY(-1px);
    background-color: rgba(111, 27, 181, 0.8);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CancelButton = styled.button`
  background: #fff;
  color: #7c3aed;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #7c3aed;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  flex: 1;

  &:hover {
    background: #f5f3ff;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.div`
  background: #fff5f5;
  color: #e53e3e;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  border: 1px solid #fed7d7;
`;

export const SuccessMessage = styled.div`
  background: #f0fff4;
  color: #38a169;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  border: 1px solid #c6f6d5;
`;
