import mongoose from "mongoose";

const connectMONGODB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MONGODB", error.message);
    process.exit(1);
  }
};

export default connectMONGODB;
