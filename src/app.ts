import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import db from "./config/db";
import { router } from "./routes";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);
db().then(() => console.log("db connected"));


export default app;