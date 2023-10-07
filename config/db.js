import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/quizDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to Mongodb`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
