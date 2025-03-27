import apiClient from "./apiClient";

type LoginData = {
  email: string;
  password: string;
};

type LoginResponseData = {
  accessToken: string;
};

export const login = async (data: LoginData): Promise<LoginResponseData> => {
  const response = await apiClient.post<LoginResponseData>("/auth", data);
  return response.data;
};
