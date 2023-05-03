import { Router } from "express";
import { readdirSync } from "fs";

const router = Router();
const PATH_ROUTER = `${__dirname}`;

//Clear .ts from the file names
const cleanName = (fileName: string) => {
  const name = fileName.split(".").shift();
  return name
} 

// Dynamic route loader
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanFileName = cleanName(fileName)
  if (cleanFileName !== "index"){
    import(`./${cleanFileName}`).then((moduleRouter) => {
      router.use(`/${cleanFileName}`, moduleRouter.router);
    });
  };
});


export { router };