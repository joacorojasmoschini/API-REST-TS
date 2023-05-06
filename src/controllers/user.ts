import { Response } from "express";
import { handleHttp } from "../utils/errorHandle";
import { RequestUser } from "../interfaces/reqUserInterface";
import { getProfile } from "../services/user";
import { Auth } from "../interfaces/authInterface";

const getUser = async({ user }: RequestUser, res:Response) => {
  try {
    const profile = await getProfile(<Auth>user);
    res.status(200).json(profile);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_USER', error)
  }
}

export { getUser };