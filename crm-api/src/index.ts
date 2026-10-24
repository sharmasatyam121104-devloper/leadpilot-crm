
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.config";

const app = express();

app.use(
    cors({
    origin: [
        process.env.CLIENT_URL || "http://localhost:5173",
        "http://localhost:3000",
    ],
    credentials: true,
    })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
    res.status(200).json({
    success: true,
    message: "crm-api is running successfully",
    });
});

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error: any) {
    console.error('❌ Server Start Failed:', error.message);
    process.exit(1);
  }
};
startServer();
