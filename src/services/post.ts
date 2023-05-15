import { ObjectId } from "mongoose";
import { Post } from "../interfaces/postInterface";
import { User } from "../interfaces/userInterface";
import { PostModel } from "../models/post";

const publishPost = async ( author: User, content : Post) => {
  const newPost = await PostModel.create({
    author: author._id,
    content
  });

  return newPost;
};

const getPublication = async ( { _id }: Post) => {

  const findPost = await PostModel.findById(_id)
  return findPost;
};

export { publishPost, getPublication };