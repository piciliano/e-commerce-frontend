import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./styleds";
import { BiUpload } from "react-icons/bi";
import { useAddPictureInProduct } from "../../api/addPictureInProduct";
import { useProduct } from "../../contexts/productContext";

interface AddRender {
  render: boolean;
  setRender: Dispatch<SetStateAction<boolean>>;
}

export const AddPhoto = ({ render, setRender }: AddRender) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const mutation = useAddPictureInProduct();
  const [isUploading, setIsUploading] = useState(false);
  const { productId } = useProduct();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedFiles = Array.from(event.target.files);

    const validFiles = selectedFiles.filter(
      (file) => file instanceof File && file.size > 0
    );

    if (validFiles.length > 0) {
      const newFiles = [...files, ...validFiles].slice(0, 5);
      setFiles(newFiles);
      setFileNames(newFiles.map((file) => file.name));
    }
  };

  const handleUpload = async () => {
    if (files.length === 0 || !productId) {
      return;
    }

    setIsUploading(true);

    mutation.mutate(
      { files, productId },
      {
        onSuccess: () => {
          setFiles([]);
          setFileNames([]);
          setIsUploading(false);
          setRender(true);
        },
        onError: (error) => {
          console.error("Erro ao adicionar a foto:", error);
          setIsUploading(false);
        },
      }
    );
  };

  return (
    <S.Container>
      <S.BlockRequest $isRender={render} />
      <S.UploadWrapper>
        <S.FileInput
          id="file"
          type="file"
          onChange={handleFileChange}
          disabled={isUploading}
          multiple
          accept="image/*"
        />
        <S.Label htmlFor="file">
          <BiUpload size={20} />
          {files.length > 0 ? "Escolher outra imagem" : "Escolher arquivos"}
        </S.Label>

        {fileNames.length > 0 && (
          <S.FileNameList>
            {fileNames.map((name, index) => (
              <S.FileName key={index}>{name}</S.FileName>
            ))}
          </S.FileNameList>
        )}
      </S.UploadWrapper>

      <S.SubmitButton
        disabled={files.length === 0 || isUploading || !productId}
        onClick={handleUpload}
      >
        {isUploading ? "Enviando..." : "Adicionar Foto(s)"}
      </S.SubmitButton>
    </S.Container>
  );
};
