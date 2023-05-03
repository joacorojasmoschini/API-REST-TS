import { Auth } from "./authInterface";

export interface User extends Auth {
  userName: string;
  name: string;
  lastName: string;
  birthday: Date;
  avatar: string
}