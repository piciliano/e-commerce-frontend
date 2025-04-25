import { useQueryClient, useMutation } from "@tanstack/react-query";
import apiClient from "./apiClient";

interface UpdateUserPayload {
  id: string;
  data: {
    name?: string;
    email?: string;
    phone?: string;
    birth?: string;
  };
}

export const updateUser = async ({
  id,
  data,
}: UpdateUserPayload): Promise<void> => {
  await apiClient.patch(`/users/${id}`, data);
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["productsByUser"] });
    },
    onError: (error) => {
      console.error("Erro ao atualizar usuário:", error);
    },
  });
};
