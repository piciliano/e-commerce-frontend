import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const PaymentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

export const OrderSummary = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  align-self: flex-start;

  h3 {
    margin-bottom: 1.5rem;
    color: #333;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.5rem;

  @media (max-width: 576px) {
    font-size: 1.3rem;
  }
`;

export const SectionContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: #6f1bb5;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;

interface MethodOptionProps {
  $active: boolean;
}

export const MethodOption = styled.button<MethodOptionProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ $active }) => ($active ? "#f0f7ff" : "transparent")};
  border: 1px solid ${({ $active }) => ($active ? "#6f1bb5" : "#ddd")};
  border-radius: 6px;
  color: ${({ $active }) => ($active ? "#6f1bb5" : "#666")};
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    border-color: #4a90e2;
    color: #4a90e2;
  }

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 576px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    white-space: nowrap;
  }
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CreditCardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.9rem;
    color: #555;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border 0.2s ease;

  &:focus {
    border-color: #6f1bb5;
    outline: none;
    box-shadow: 0 0 0 2px rgba(111, 27, 181, 0.1);
  }

  &::placeholder {
    color: #bbb;
  }

  @media (max-width: 576px) {
    padding: 0.65rem;
  }
`;

export const InputRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }

  ${InputGroup} {
    flex: 1;
  }
`;

export const SecurityInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export const PixContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;

  @media (max-width: 576px) {
    padding: 1rem 0;
    gap: 1rem;
  }
`;

export const PixImage = styled.img`
  width: 200px;
  height: 200px;
  padding: 1rem;

  @media (max-width: 576px) {
    width: 150px;
    height: 150px;
  }
`;

export const PixInstructions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #666;
  text-align: center;
`;

export const BoletoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 6px;
  color: #666;
  background: #f9f9f9;
`;

export const SubmitButton = styled.button`
  background: #6f1bb5;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1.5rem;

  &:hover {
    background: #5a1590;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 576px) {
    padding: 0.85rem;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #666;
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
`;
