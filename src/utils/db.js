// utils/db.js
import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connection.readyState === 1) {
    // Already connected
    return mongoose.connection.asPromise();
  }
  return mongoose.connect(process.env.MONGODB_URI);
};

export default connectMongo;
