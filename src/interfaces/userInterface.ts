import { Auth } from "./authInterface";
import { Post } from "./postInterface";

export interface User extends Auth {
  _id?: string;
  userName: string;
  name: string;
  birthday: Date;
  avatar?: string;
  bio?: string;
  followers?: User[];
  followings?: User[];
  posts?: Post[];
  createAt?: Date; 
}