import { useQueryClient, useMutation } from "@tanstack/react-query";
import apiClient from "./apiClient";

interface UserCartResponse {
  id: string;
  name: string;
  email: string;
  cart: string[];
}

export const addProductToCart = async (
  id: string
): Promise<UserCartResponse> => {
  const response = await apiClient.post(`/products/cart/${id}`);
  return response.data;
};

export const useAddProductToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProductToCart,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["productsInCart"] });
    },
    onError: (error) => {
      console.error("Erro ao adicionar produto ao carrinho:", error);
    },
  });
};
