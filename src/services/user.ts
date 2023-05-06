import { Auth } from "../interfaces/authInterface";
import { RequestUser } from "../interfaces/reqUserInterface";

import { UserModel } from "../models/user";

const getProfile = async ( { id }: Auth) => {
  
  const findUser = await UserModel.findById(id);  
  return findUser;
}

export { getProfile };