import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  name: String,
  email: String,
  image: String,
  creditPoints: { type: Number, default: 100 },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

