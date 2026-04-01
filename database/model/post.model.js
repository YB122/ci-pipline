import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    content: { type: String, required: true },
    title: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users",required:true },
  },
  { timestamps: true },
);

export const postModel = mongoose.model("posts", postSchema);
