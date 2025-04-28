import styled from "styled-components";

interface RenderProps {
  $isRender: boolean;
}

export const Container = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  border: 1px solid #f0f0f0;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;

export const Label = styled.label`
  background-color: #7c3aed;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  width: 100%;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(124, 58, 237, 0.2);

  &:hover {
    background: #6d28d9;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(124, 58, 237, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const ThumbnailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  margin-top: 0.5rem;
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  background: rgba(239, 68, 68, 0.9);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  padding: 0;
  transition: all 0.2s;

  &:hover {
    background: rgba(220, 38, 38, 0.9);
    transform: scale(1.1);
  }
`;

export const SubmitButton = styled.button`
  background: #7c3aed;
  color: #fff;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 4px rgba(124, 58, 237, 0.2);

  &:hover {
    background: #6d28d9;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(124, 58, 237, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #e2e8f0;
    color: #94a3b8;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const BlockRequest = styled.div<RenderProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(2px);
  z-index: 10;
  pointer-events: all;
  border-radius: 12px;

  display: ${({ $isRender }) => ($isRender ? "block" : "none")};
  transition: opacity 0.3s ease-out;
  opacity: ${({ $isRender }) => ($isRender ? 1 : 0)};
`;

export const Instructions = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin-top: -0.5rem;
  text-align: center;
`;
