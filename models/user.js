import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  avatar: String,
  email: String,
  salary: String,
  date: String,
  status: String,
});

const User = model("User", userSchema);
export default User;
