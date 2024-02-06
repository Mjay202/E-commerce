import express from "express";
import { verifyTokenAndAuthorization } from "./verifyToken";
const router = express.Router();


// CREATE CART

router.get("/:id", verifyTokenAndAuthorization, (req, res) => {
    
})

// UPDATE CART

//DELETE CART

// GET CART (takes user_id)

// GET ALL CART (for Admin)

export default router;
