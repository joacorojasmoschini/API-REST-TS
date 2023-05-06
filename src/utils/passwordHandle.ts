import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  return await hash(password, 8);
};

const validate = async (password: string, encryptedPassword: string) => {
  return await compare(password, encryptedPassword);
};

export { encrypt, validate };