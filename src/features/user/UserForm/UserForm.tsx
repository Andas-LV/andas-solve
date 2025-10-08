import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type TUserSchema,
  userSchema,
} from "@/entities/user/schemas/userSchemas.ts";
import { Button } from "@/shared/ui/Button/Button.tsx";
import "./UserForm.css";

interface Props {
  onSubmit: (data: TUserSchema) => void;
  initialData?: TUserSchema;
  onCancel: () => void;
}

export const UserForm = ({ onSubmit, initialData, onCancel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: initialData || { name: "", email: "", tel: "" },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-form">
      <div className="form-group">
        <label htmlFor="name">ФИО</label>
        <input id="name" {...register("name")} />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email")} />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="tel">Телефон</label>
        <input id="tel" {...register("tel")} />
        {errors.tel && <span className="error">{errors.tel.message}</span>}
      </div>
      <div className="form-actions">
        <Button type="button" onClick={onCancel} variant="danger">
          Отмена
        </Button>
        <Button type="submit">Сохранить</Button>
      </div>
    </form>
  );
};
