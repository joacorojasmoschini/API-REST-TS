import { sign, verify } from "jsonwebtoken";
require('dotenv').config();

const JWT_SECRET = <string> process.env.JWT_SECRET;

const generateToken = (id:Object) => {
 return sign({ id }, JWT_SECRET);
};

const verifyToken = (token: string) => {
  return verify(token, JWT_SECRET);
};

export { generateToken, verifyToken };