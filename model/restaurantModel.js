import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    logo: {
      data: Buffer,
      contentType: String,
    },
    website: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    meals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Restaurant", restaurantSchema);
