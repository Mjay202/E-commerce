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

router.put("/:id", async(req, res) => {
    const cartId = req.params.id
    try {
      const updatedCart =  await Cart.findByIdAndUpdate(
            cartId,
            { $set: req.body },
            {new: true}
        )

        res.status(200).json(updatedCart)
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE CART

// GET CART (takes user_id)

router.get("/:id", async(req, res) => {
    
    try {
        const userCart = await Cart.find({ userId: req.params.id });
        res.status(200).json(userCart);
    } catch (err) {
        res.status(500).json(err)
    }
    
})


// GET ALL CART (for Admin)

export default router;
