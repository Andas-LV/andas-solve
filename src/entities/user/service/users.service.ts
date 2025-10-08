import type {TSubmitData, User} from "@/entities/user/types";

let users: User[] = [
  { id: 1, name: "Андас Сатыбалды", email: "andas@mail.com", tel: "+77001234567" },
  { id: 2, name: "John Jones", email: "john@mail.com", tel: "+77007654321" },
];

export const getUsers = async (): Promise<User[]> =>
  new Promise((res) => setTimeout(() => res(users), 300));

export const addUser = async (user: TSubmitData): Promise<User> =>
  new Promise((res) =>
    setTimeout(() => {
      const newUser = { ...user, id: Date.now() };
      users.push(newUser);
      res(newUser);
    }, 300),
  );

export const updateUser = async (user: User): Promise<User> =>
  new Promise((res) =>
    setTimeout(() => {
      users = users.map((u) => (u.id === user.id ? user : u));
      res(user);
    }, 300),
  );

export const deleteUser = async (id: number): Promise<number> =>
  new Promise((res) =>
    setTimeout(() => {
      users = users.filter((u) => u.id !== id);
      res(id);
    }, 300),
  );
