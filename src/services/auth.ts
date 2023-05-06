import { Auth } from "../interfaces/authInterface";
import { User } from "../interfaces/userInterface";
import { UserModel } from "../models/user";
import { generateToken } from "../utils/jwtHandle";
import { encrypt, validate } from "../utils/passwordHandle";

const registerUser = async ({userName, name, lastName, birthday, password, email, avatar }: User) => {
  const checkEmail = await UserModel.findOne({ email });
  const checkUserName = await UserModel.findOne({ userName });

  if(checkEmail) return { message: "The Email Alredy Exists" };
  if(checkUserName) return { message: "The User Name Alredy Exists" };
  
  const encryptPassword = await encrypt(password);
  const newUser = UserModel.create({
    userName,
    name,
    lastName,
    birthday,
    password: encryptPassword,
    email,
    avatar
  });

  return newUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkEmail = await UserModel.findOne({ email });
  if (!checkEmail) return { message: "The email does not belong to an account" };

  const verify = await validate(password, checkEmail.password);
  if(!verify) return { message: "Wrong email or password" };

  const token = generateToken(checkEmail._id)
  return {
    token,
    user: {
      name: checkEmail.name,
      email: checkEmail.email
    }
  };
};

export { registerUser, loginUser };