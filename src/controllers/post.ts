import { Request, Response } from "express";
import { handleHttp } from "../utils/errorHandle";
import { RequestUser } from "../interfaces/reqUserInterface";
import { getPublication, publishPost } from "../services/post";
import { getProfile } from "../services/user";
import { User } from "../interfaces/userInterface";
import { Post } from "../interfaces/postInterface";

const getPosts = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_GET_POSTS', error)
  }
};

const getPost = async ({ params }: Request, res: Response) => {
  try {
    const post = await getPublication(<Post><unknown>params)
    res.status(200).json(post);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_POST', error)
  }
};

const createPost = async (req: RequestUser, res: Response) => {
  try {
    const { content } = req.body;
    const user = req.user
    
    const author = await getProfile(<User>user);
    const post = await publishPost(<User>author, content);

    res.status(200).json(post);
  } catch (error) {
    handleHttp(res, 'ERROR_CREATE_POST', error)
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_POST', error)
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_POST', error)
  }
};
export { getPosts, getPost, createPost, updatePost, deletePost }; 