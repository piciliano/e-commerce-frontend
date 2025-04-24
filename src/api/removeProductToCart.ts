import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "./apiClient";

interface UserCartResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  birth: string;
  cart: string[];
}

export const removeProductToCart = async (
  id: string
): Promise<UserCartResponse> => {
  const response = await apiClient.patch(`/products/deleteItemCart/${id}`);
  return response.data;
};

export const useRemoveProductToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeProductToCart,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["productsInCart"] });
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error("Erro ao remover produto do carrinho:", error.message);
      } else {
        console.error("Erro desconhecido ao remover produto do carrinho");
      }
    },
  });
};
