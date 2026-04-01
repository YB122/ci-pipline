import dns from "node:dns";
import mongoose from "mongoose";
// import { env } from "../../config/env.service.js";

// dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const dataBaseConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/nti-test")
    .then(() => console.log("data base connected"))
    .catch((err) => console.log(err));
};
