import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";
import { Category } from "../enums/categoryEnum";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
  userId: string;
  category: Category;
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
