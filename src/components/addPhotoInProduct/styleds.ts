import styled from "styled-components";

interface RenderProps {
  $isRender: boolean;
}

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.label`
  background-color: #8a2be2;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #6a1bbd;
  }
`;

export const FileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const FileNameList = styled.div`
  font-size: 0.9rem;
  color: #555;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const FileName = styled.span`
  font-size: 0.9rem;
  color: #555;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubmitButton = styled.button`
  background: #8a2be2;
  color: #fff;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
  text-align: center;

  &:hover {
    background: #6a1bbd;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const BlockRequest = styled.div<RenderProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(1.5px);
  z-index: 10;
  pointer-events: all;

  display: ${({ $isRender }) => ($isRender ? "block" : "none")};
  transition: opacity 0.3s ease-out;
  opacity: ${({ $isRender }) => ($isRender ? 1 : 0)};
`;
