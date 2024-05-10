import { Router } from "express";
import { createTodo, getAllTodos, updateTodo } from "../controllers/todo.controller.js";

const router = Router();

router.route("/create-todo").post(createTodo);

router.route("/getAllTodos").get(getAllTodos);

router.route("/update-todo").post(updateTodo);

export default router;