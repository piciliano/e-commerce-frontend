import { useMutation } from "@tanstack/react-query";
import apiClient from "./apiClient";

type signInData = {
  name: string;
  email: string;
  password: string;
};

type signInDataResponse = {
  name: string;
  email: string;
  cart: [];
};

export const signInRequest = async (
  data: signInData
): Promise<signInDataResponse> => {
  const response = await apiClient.post<signInDataResponse>("/users", data);
  return response.data;
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signInRequest,
  });
};
