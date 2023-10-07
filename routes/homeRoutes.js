import express from "express";
import { getHomeDetailsController } from "../controller/homeController.js";

const router = express.Router();

router.get("/", getHomeDetailsController);

export default router;
