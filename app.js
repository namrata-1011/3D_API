import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import loggerMiddleware from "./src/middleware/logger.middleware.js";

const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Security
app.use(helmet());

// Compression
app.use(compression());

// Cookie Parser
app.use(cookieParser());

// Logger
app.use(loggerMiddleware);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Backend is Running...",
  });
});

export default app;