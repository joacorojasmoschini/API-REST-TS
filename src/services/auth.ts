import { User } from "../interfaces/userInterface";
import UserModel from "../models/user";

const registerUser = async ({userName, name, lastName, birthday, password, email, avatar }: User, ) => {
  const checkEmail = await UserModel.findOne({ email });
  const checkUserName = await UserModel.findOne({ userName });

  if(checkEmail) return { message: "The Email Alredy Exists" };
  if(checkUserName) return { message: "The User Name Alredy Exists" };

  const newUser = UserModel.create({
    userName,
    name,
    lastName,
    birthday,
    password,
    email,
    avatar
  });
  return newUser;
};

const loginUser = async () => {
  
};

export { registerUser, loginUser };