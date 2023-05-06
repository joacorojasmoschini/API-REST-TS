import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestUser extends Request{
  user?: string | JwtPayload; 
};