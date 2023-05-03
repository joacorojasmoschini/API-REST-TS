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
    lastName: {
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
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const UserModel = model("users", userSchema);
export default UserModel; 