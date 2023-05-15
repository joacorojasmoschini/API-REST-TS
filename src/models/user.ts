import { Schema, Types, Model, model } from "mongoose";
import { User } from "../interfaces/userInterface";

const userSchema = new Schema <User> (
  {
    userName:{
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    birthday: {
      type: Date, 
      required: true
    },
    password: {
      type: String, 
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    avatar: {
      type: String,
      default: "https://w1.pngwing.com/pngs/933/945/png-transparent-social-media-icons-avatar-user-profile-login-black-circle-silhouette-symbol.png"
    },
    bio: String,
    followers: {
      ref: "User",
      type: Schema.Types.ObjectId
    },
    followings: {
      ref: "User",
      type: Schema.Types.ObjectId
    },
    posts: {
      ref: "Post",
      type: Schema.Types.ObjectId
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);


export const UserModel: Model<User> = model("users", userSchema); 