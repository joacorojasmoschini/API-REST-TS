import { Router } from "express";
import { getPosts, getPost, createPost, updatePost, deletePost  } from "../controllers/post";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getPosts);
router.get("/:_id", getPost);
router.post("/", checkSession, createPost);
router.put("/", checkSession, updatePost);
router.delete("/", checkSession, deletePost);

export { router };