import express from "express";
import { verifyTokenAndAuthorization } from "./verifyToken.js";
const router = express.Router();
import Cart from "../models/Cart.js";

// CREATE CART

router.post("/:id", async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE CART

//DELETE CART

// GET CART (takes user_id)



// GET ALL CART (for Admin)

export default router;
