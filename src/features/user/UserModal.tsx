import { Modal } from "@/shared/ui/Modal/Modal.tsx";
import { UserForm } from "./UserForm/UserForm.tsx";
import { useUsers } from "@/entities/user/hooks/useUsers.ts";
import { useSearchParams, useNavigate } from "react-router-dom";
import type { TSubmitData, User } from "@/entities/user/types";

export const UserModal = ({ users }: { users: User[] }) => {
  const [params] = useSearchParams();
  const id = params.get("modal");
  const navigate = useNavigate();
  const { add, update } = useUsers();

  const user = id ? users.find((u) => u.id === Number(id)) : null;

  const handleSubmit = (data: TSubmitData) => {
    if (user) {
      update.mutate({ ...user, ...data });
    } else {
      add.mutate(data);
      navigate("/table");
    }
  };

  return (
    <Modal isOpen={!!id} onClose={() => navigate("/table")}>
      <h3>{user ? "Редактировать" : "Добавить"}</h3>
      <UserForm
        initialData={user || undefined}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/table")}
      />
    </Modal>
  );
};
