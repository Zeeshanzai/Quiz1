import mongoose from "mongoose";

const mealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    calories: {
      type: Number,
      required: true,
      unique: true,
    },
    mb: {
      type: Boolean,
      required: true,
    },
    recipe: {
      tags: { String },
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Meal", mealSchema);
