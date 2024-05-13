import express from "express";
import authRoutes from "./routes/auth.routes.js";
const app = express();

const PORT = 5000;
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
