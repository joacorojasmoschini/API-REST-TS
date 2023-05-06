import { NextFunction, Response } from "express";
import { handleSession } from "../utils/errorHandle";
import { verifyToken } from "../utils/jwtHandle";
import { RequestUser } from "../interfaces/reqUserInterface";

const checkSession = (req: RequestUser, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization || " ";
    
    const jwt = token.split(" ").pop()
    const user = verifyToken(`${jwt}`)
    
    if (!user){
      res.status(401).json({
        message: "Unauthorized"
      });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    handleSession(res, error);
  }
};

export { checkSession };