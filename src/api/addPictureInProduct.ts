import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "./apiClient";
import { useProduct } from "../contexts/productContext";

interface PictureRequest {
  files: File[];
  productId: string;
}

interface PictureResponse {
  id: string;
  link: string;
  productId: string;
}

export const addPictureInProduct = async ({
  files,
  productId,
}: PictureRequest): Promise<PictureResponse[]> => {
  const formData = new FormData();

  if (!files || files.length === 0) {
    throw new Error("Nenhum arquivo válido selecionado");
  }

  files.forEach((file, index) => {
    formData.append(`files`, file);
  });

  formData.append("productId", productId);

  try {
    const response = await apiClient.post(`/pictures`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar a foto:", error);
    if (error) {
      console.error("Detalhes da resposta de erro:", error);
    }
    throw new Error();
  }
};

export const useAddPictureInProduct = () => {
  const { setProductId } = useProduct();
  const queryClient = useQueryClient();

  return useMutation<PictureResponse[], Error, PictureRequest>({
    mutationFn: addPictureInProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["pictures"] });
      setProductId(null);
    },
    onError: (error) => {
      console.error("Erro ao adicionar a foto:", error.message);
    },
  });
};
