import { Response } from "express";

// Create an error handler to reuse
const handleHttp = (res: Response, error: string, errorRaw? : any) => {
  console.log(errorRaw);
  
  res.status(500).json({ error });
} 

export { handleHttp };