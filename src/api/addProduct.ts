import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "./apiClient";
import { Category } from "../enums/categoryEnum";
import { useProduct } from "../contexts/productContext";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
  userId: string;
  category: Category;
}

interface ProductRequest {
  title: string;
  description: string;
  price: string;
  quantity: number;
  category: Category;
}

export const addProduct = async (product: ProductRequest): Promise<Product> => {
  const response = await apiClient.post(`/products`, product);
  return response.data;
};

export const useAddProduct = () => {
  const { setProductId } = useProduct();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,
    onSuccess: (data: Product) => {
      setProductId(data.id);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Erro ao adicionar o produto:", error);
    },
  });
};
