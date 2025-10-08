import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addUser, deleteUser, getUsers, updateUser } from "@/entities/user/service/users.service.ts";
import type { User } from "@/entities/user/types";

export const useUsers = () => {
  const client = useQueryClient();
  const { data, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const add = useMutation({
    mutationFn: addUser,
    onSuccess: () => client.invalidateQueries({ queryKey: ["users"] }),
  });

  const update = useMutation({
    mutationFn: updateUser,
    onSuccess: () => client.invalidateQueries({ queryKey: ["users"] }),
  });

  const remove = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => client.invalidateQueries({ queryKey: ["users"] }),
  });

  return { data, isLoading, add, update, remove };
};
