import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button/Button.tsx";
import type { User } from "@/entities/user/types";
import "./UserTable.css";

interface Props {
  users: User[];
  onDelete: (id: number) => void;
}

export const UserTable = ({ users, onDelete }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} onDoubleClick={() => navigate(`?modal=${u.id}`)}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.tel}</td>
              <td className="actions">
                <Button onClick={() => onDelete(u.id)} variant="danger">
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
