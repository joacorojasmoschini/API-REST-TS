import { Schema, Types, Model, model } from "mongoose";
import { Comment } from "../interfaces/commentInterface";

const CommentSchema = new Schema <Comment>(
  {
    author: {
      ref: "User",
      type: Schema.Types.ObjectId,
      required: true
    },
    post: {
      ref: "Post",
      type: Schema.Types.ObjectId,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
  ,{
    timestamps: true,
    versionKey: false
  }
);

export const CommentModel: Model<Comment> = model("comments", CommentSchema); 