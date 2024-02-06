import express from "express";
import Product from "../models/Product.js";
import { verifyTokenAndAdmin } from "./verifyToken.js";
const router = express.Router();

// CREATE NEW PRODUCT
router.post("/", verifyTokenAndAdmin, async (req, res) => {

    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
    
});

// UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    const prodId = req.params.id

    try {
        
        const updatedProd = await Product.findByIdAndUpdate(
            prodId,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedProd);

    } catch (err) {
        res.status(500).json(err)
    }
});

// GET PRODUCT BY CATEGORY OR NEW OR ALL PRODUCTS
router.get("/", async (req, res) => {
    
    const qNew = req.query.new
    const qCat = req.query.cat
    try {

        let productList;
        if (qNew) {
            productList = await Product.find().sort({ createdAt: -1 }).limit(1)
        }

        else if (qCat) {
            productList = await Product.find({
                categories:
                    { $in: [qCat] } 
            })
        }
        else {
             productList = await Product.find();
        }
        res.status(200).json(productList)
    } catch (err) {
        res.status(500).json(err)
    }

});

// GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
    
    try {
        const allProducts = await Product.findById(req.params.id)
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(500).json(err)
    }

});






// DELETE A PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted successfully")
    } catch (err) {
        res.status(500).json(err)
    }
});



export default router;
