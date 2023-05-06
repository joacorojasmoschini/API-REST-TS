import { Router } from "express";
import { getUser } from "../controllers/user";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getUser);

export { router };