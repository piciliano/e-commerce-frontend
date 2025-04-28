import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./styleds";
import { BiUpload } from "react-icons/bi";
import { useAddPictureInProduct } from "../../api/addPictureInProduct";
import { useProduct } from "../../contexts/productContext";
import { FiX } from "react-icons/fi";

interface AddRender {
  render: boolean;
  setRender: Dispatch<SetStateAction<boolean>>;
}

export const AddPhoto = ({ render, setRender }: AddRender) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const mutation = useAddPictureInProduct();
  const [isUploading, setIsUploading] = useState(false);
  const { productId } = useProduct();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedFiles = Array.from(event.target.files);

    const validFiles = selectedFiles.filter(
      (file) =>
        file instanceof File && file.size > 0 && file.type.startsWith("image/")
    );

    if (validFiles.length > 0) {
      const newFiles = [...files, ...validFiles].slice(0, 5);
      setFiles(newFiles);

      // Create image previews
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      setPreviews(newPreviews);
    }
  };

  const handleRemoveImage = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);

    const newPreviews = [...previews];
    URL.revokeObjectURL(newPreviews[index]);
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);
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
          setPreviews([]);
          setIsUploading(false);
          setRender(true);
        },
        onError: (error) => {
          console.error("Error uploading photos:", error);
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
          {files.length > 0 ? "Add more images" : "Select images"}
        </S.Label>

        {previews.length > 0 && (
          <>
            <S.ThumbnailsContainer>
              {previews.map((preview, index) => (
                <S.ThumbnailWrapper key={index}>
                  <S.ThumbnailImage src={preview} alt={`Preview ${index}`} />
                  <S.RemoveButton onClick={() => handleRemoveImage(index)}>
                    <FiX size={16} />
                  </S.RemoveButton>
                </S.ThumbnailWrapper>
              ))}
            </S.ThumbnailsContainer>
            <S.Instructions>
              You can upload up to 5 images (Max 5MB each)
            </S.Instructions>
          </>
        )}
      </S.UploadWrapper>

      <S.SubmitButton
        disabled={files.length === 0 || isUploading || !productId}
        onClick={handleUpload}
      >
        {isUploading ? "Uploading..." : `Upload ${files.length} image(s)`}
      </S.SubmitButton>
    </S.Container>
  );
};
