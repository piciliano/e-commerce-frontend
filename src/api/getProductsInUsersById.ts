import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";
import { Category } from "../enums/categoryEnum";

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
  quantity: number;
  userId: string;
  category: Category;
}

export interface UserWithProducts {
  id: string;
  name: string;
  email: string;
  phone: string;
  birth: string;
  password: string;
  cart: string[];
  products: Product[];
}

export const getProductsByUser = async (): Promise<UserWithProducts> => {
  try {
    const response = await apiClient.get<UserWithProducts>(
      "/users/productsByUser"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};

export const getProductsByUserQuery = () => {
  return useQuery({
    queryKey: ["productsByUser"],
    queryFn: getProductsByUser,
  });
};
