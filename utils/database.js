import mongoose from "mongoose";

let isConeccted = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConeccted) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConeccted = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
