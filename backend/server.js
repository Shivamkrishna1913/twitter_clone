import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMONGODB from "./db/connectMONGODB.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json()); //A middleware...to parse req.body
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectMONGODB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
