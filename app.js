import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";

import loggerMiddleware from "./src/middleware/logger.middleware.js";
import errorMiddleware from "./src/middleware/error.middleware.js";
import routes from "./src/routes/index.js";

const app = express();

// ==============================
// Body Parser
// ==============================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==============================
// CORS
// ==============================
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ==============================
// Security
// ==============================
app.use(helmet());

// ==============================
// Compression
// ==============================
app.use(compression());

// ==============================
// Cookie Parser
// ==============================
app.use(cookieParser());

// ==============================
// Logger Middleware
// ==============================
app.use(loggerMiddleware);

// ==============================
// API Routes
// ==============================
app.use("/api", routes);

// ==============================
// Health Check Route
// ==============================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Backend is Running...",
  });
});

// ==============================
// Global Error Middleware
// ==============================
app.use(errorMiddleware);

export default app;