import { Request, Response } from "express";
import { handleHttp } from "../utils/errorHandle";
import { registerUser, loginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const newUser = await registerUser(body);
    if (newUser.hasOwnProperty("message")){
      res.status(409).json(newUser);
    } else {
      res.status(200).json(newUser);  
    }
  } catch (error) {
    handleHttp(res, 'ERROR_REGISTER_USER', error)
  }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body
    const logUser = await loginUser({ email, password });
    if (logUser.hasOwnProperty("message")){
      res.status(403).json(logUser);
    } else {
      res.status(200).json(logUser);
    }
  } catch (error) {
    handleHttp(res, 'ERROR_LOGIN_USER', error)
  }
};

export { registerCtrl, loginCtrl };