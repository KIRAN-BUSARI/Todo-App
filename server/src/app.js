import express from "express";
import morgan from "morgan";
const app = express()


app.use(morgan("dev"))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ // To make understand express the encoded url
    limit: "16kb", extended: true
}))
app.use(express.static("public")) // To store any public assests in server (Temp

import todoRoutes from "./routes/todo.routes.js";

app.use("/api/v1/todo", todoRoutes)


export { app };