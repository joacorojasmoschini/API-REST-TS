import { Schema, Types, Model, model } from "mongoose";
import { Post } from "../interfaces/postInterface";


const PostSchema = new Schema <Post>(
  {
    author: {
      ref: "User",
      type: Schema.Types.ObjectId,
      required: true
    },
    content: {
      type: String,
      required: true,
    },
    likes: [{
      ref: "User",
      type: Schema.Types.ObjectId
    }],
    repost: [{
      ref: "User",
      type: Schema.Types.ObjectId
    }],
    comments: [{
      ref: "Comment",
      type: Schema.Types.ObjectId
    }]
  }
  ,{
    timestamps: true,
    versionKey: false
  }
)

export const PostModel: Model<Post> = model("posts", PostSchema); 