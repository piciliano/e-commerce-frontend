import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";

export interface Picture {
  id: string;
  link: string;
  productId: string;
}

export interface Comment {
  id: string;
  comment: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  userId: string;
  productId: string;
  author: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  pictures: Picture[];
  comments: Comment[];
}

export type ProductResponse = Product[];

export const getProductById = async (id: string) => {
  const response = await apiClient.get<Product>(`/products/${id}`);
  return response.data;
};

export const getProductByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
};
