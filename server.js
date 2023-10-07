import express from "express";
import dotenv from "dotenv";
import homeRoutes from "./routes/homeRoutes.js";
import morgan from "morgan";
import connectDB from "./config/db.js";
import color from "colors";

// connect db
connectDB();

// configure dotenv
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/home", homeRoutes);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log(`Server is listening at port ${PORT}`.bgCyan);
});
