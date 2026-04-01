import dns from "node:dns";
import mongoose from "mongoose";
// import { env } from "../../config/env.service.js";

// dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const dataBaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nti-test", {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });
    console.log("data base connected");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};
