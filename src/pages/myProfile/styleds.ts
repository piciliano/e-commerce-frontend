import styled from "styled-components";

interface Modal {
  $render: boolean;
}

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5fa;
`;

export const ProfileContent = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
`;

export const DataContent = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #6c1b77;
`;

export const Email = styled.p`
  color: #666;
  font-size: 1rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

export const StatusCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #f0e9f7;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  font-size: 1rem;
  color: #444;
`;

export const Modal = styled.div<Modal>`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: ${({ $render }) => ($render ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ContentModal = styled.div`
  width: 30%;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  position: relative;
  animation: fadeInUp 1s normal;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(100vh);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
  display: flex;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #6c1b77;
    outline: none;
    box-shadow: 0 0 0 3px rgba(108, 27, 119, 0.1);
  }
`;

export const Button = styled.button`
  background-color: #6c1b77;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s;
  width: 100%;

  &:hover {
    background-color: #5a1664;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  width: ${({ type }) => (type === "reset" ? "20%" : "80%")};
`;

export const ColorRed = styled.p`
  color: red;
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;
