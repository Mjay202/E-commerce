import express, { json } from "express";
import cors from "cors";
import cookieparser from "cookie-parser";

import { connect } from "mongoose";
import { config } from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import orderRoute from "./routes/order.js";
import cartRoute from "./routes/cart.js";
import productRoute from "./routes/product.js";

// DOTENV
config();

const app = express();
app.listen(5200, () => {
  console.log("I am starting now");
});

connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.log(err);
  });

app.use(json());
app.use(cors());
app.use(cookieparser());

app.get("/api/test", () => {
  console.log("test is successful");
});


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);
