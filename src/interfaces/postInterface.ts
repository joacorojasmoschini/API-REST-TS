import { Comment } from "./commentInterface";
import { User } from "./userInterface";

export interface Post {
  _id?: string;
  author: User;
  content: string;
  likes?: User[];
  repost?: Post[];
  comments?: Comment[]; 
  createAt?: Date;
}