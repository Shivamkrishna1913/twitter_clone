import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMONGODB from "./db/connectMONGODB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectMONGODB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
