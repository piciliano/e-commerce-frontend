import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";

export interface Picture {
  id: string;
  link: string;
  productId: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  pictures: Picture[];
}

export interface ProductResponse {
  data: Product[];
  total: number;
  page: number;
  totalPages: number;
}

export const getProducts = async (
  searchQuery?: string,
  page: number = 1,
  limit: number = 8
): Promise<ProductResponse> => {
  const url = searchQuery
    ? `/products?q=${searchQuery}&page=${page}&limit=${limit}`
    : `/products?page=${page}&limit=${limit}`;

  const response = await apiClient.get<ProductResponse>(url);
  return response.data;
};

export const useAllProducts = (searchQuery?: string, page: number = 1) => {
  return useQuery({
    queryKey: ["products", searchQuery, page],
    queryFn: () => getProducts(searchQuery, page),
  });
};
