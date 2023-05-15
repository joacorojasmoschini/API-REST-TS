import { Post } from "./postInterface";
import { User } from "./userInterface";

export interface Comment{
  _id?: string;
  author: User;
  post: Post;
  content: string;
  createAt?: Date;
}