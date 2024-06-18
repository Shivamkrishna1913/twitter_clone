import express from "express";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import connectMONGODB from "./db/connectMONGODB.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT;

app.use(express.json()); //A middleware...to parse req.body
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  connectMONGODB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
