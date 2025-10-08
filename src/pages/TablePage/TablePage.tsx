import { useUsers } from "@/entities/user/hooks/useUsers.ts";
import { UserTable } from "@/features/user/UserTable/UserTable.tsx";
import { UserModal } from "@/features/user/UserModal.tsx";
import { Button } from "@/shared/ui/Button/Button.tsx";
import { useNavigate } from "react-router-dom";
import "./TablePage.css";
import Loading from "@/shared/ui/Loading/Loading.tsx";

export const TablePage = () => {
  const { data = [], isLoading, remove } = useUsers();
  const navigate = useNavigate();

  if (isLoading) return <Loading />;

  return (
    <div className="table-page">
      <div className="table-page-header">
        <h1>Список пользователей</h1>
        <Button onClick={() => navigate("?modal=new")}>Добавить</Button>
      </div>
      <UserTable users={data} onDelete={(id) => remove.mutate(id)} />
      <UserModal users={data} />
    </div>
  );
};
