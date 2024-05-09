import { Todo } from "../models/todo.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import zod from "zod";

const todoSchema = zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1),
});

const createTodo = asyncHandler(async (req, res) => {
    try {
        const { title, description } = req.body;

        const validation = todoSchema.safeParse(req.body);

        if (!validation.success) {
            throw new ApiError(400, validation.error.issues[0].message);
        }

        if (!title || !description) {
            throw new ApiError(400, "Title and Description Are Required");
        }

        const todoExists = await Todo.findOne({ title });

        if (todoExists) {
            throw new ApiError(400, "Todo Already Exists With The Same Title");
        }

        const todo = await Todo.create({
            title,
            description
        });

        res
            .status(200)
            .json(new ApiResponse(200, todo, "Todo Created Successfully"));
    } catch (error) {
        throw new ApiError(500, error.message);
    }
});

export {
    createTodo
}