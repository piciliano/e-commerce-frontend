import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
}

export interface CartResponse {
  products: Product[];
  totalPrice: string;
}

export const getProductInCart = async (): Promise<CartResponse> => {
  const response = await apiClient.get<CartResponse>(
    `/products/getProductsInCart`
  );
  return response.data;
};

export const getProductsInCartQuery = () => {
  const token = localStorage.getItem("token");

  return useQuery<CartResponse, Error>({
    queryKey: ["productsInCart"],
    queryFn: getProductInCart,
    enabled: !!token,
  });
};
