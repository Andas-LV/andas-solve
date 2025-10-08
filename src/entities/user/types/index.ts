export interface User {
    id: number;
    name: string;
    email: string;
    tel: string;
}

export type TSubmitData = Omit<User, "id">;