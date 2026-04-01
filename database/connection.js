
import mongoose from "mongoose";

export const dataBaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nti-test", {
      serverSelectionTimeoutMS: 5000, // 5 second timeout
      connectTimeoutMS: 5000,
    });
    console.log("data base connected");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};
