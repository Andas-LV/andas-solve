import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Введите ФИО"),
  email: z.string().email("Некорректный email"),
  tel: z.string().min(10, "Введите корректный номер"),
});

export type TUserSchema = z.infer<typeof userSchema>;