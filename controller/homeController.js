import restaurantModel from "../model/restaurantModel.js";

export const getHomeDetailsController = async (req, res) => {
  try {
    const restaurants = await restaurantModel
      .find({})
      .populate("meals")
      .select("-logo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "Restaurants fetched successfully",
      total: restaurants.length,
      restaurants,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: "Error in fetching the information",
      error,
    });
  }
};
