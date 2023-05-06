import { Response } from "express";

// Create an error handler to reuse
const handleHttp = (res: Response, error: string, errorRaw? : any) => {
  console.log(errorRaw);
  
  res.status(500).json({ error });
} 

const handleSession = (res: Response, error?: any) => {
  console.log(error);
  res.status(401).json({
    error,
    message: "Invalid session"
  });
};

export { handleHttp, handleSession };