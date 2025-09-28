import express from "express";
import cors from "cors";
import { ApiResponse } from "./utils/api-response.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // This allows to serve items from the public folder.

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true, //allow cookies/auth headers
    allowedHeaders: ["Content-type", "Authorization"],
  }),
);

//import the routes

import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);
app.use(cookieParser());

export default app;
