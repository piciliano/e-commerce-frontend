import { useMutation } from "@tanstack/react-query";
import apiClient from "./apiClient";

type commentData = {
  comment: string;
  rating: number;
};

type commentResponse = {
  id: string;
  comment: string;
  rating: number;
  author: string;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
};

export const commentRequest = async (
  id: string,
  data: commentData
): Promise<commentResponse> => {
  const response = await apiClient.post<commentResponse>(
    `/comments/${id}`,
    data
  );
  return response.data;
};

export const useCommentRequest = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: commentData }) =>
      commentRequest(id, data),
  });
};
