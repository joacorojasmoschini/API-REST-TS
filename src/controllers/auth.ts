import { Request, Response } from "express";
import { handleHttp } from "../utils/errorHandle";
import { registerUser, loginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const newUser = await registerUser(body);
    res.status(200).json({ newUser });
  } catch (error) {
    handleHttp(res, 'ERROR_REGISTER_USER', error)
  }
};

const loginCtrl = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_LOGIN_USER', error)
  }
};

export { registerCtrl, loginCtrl };