import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true); //ensures that only the fields that are specified in our schema will be saved in our db

  // if the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }

  // Connect to mongodb
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected....");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
