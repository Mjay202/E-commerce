import express from "express";
const router = express.Router();
import Order from '../models/Order.js'

// create order
router.post("/:id", async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = newOrder.save()
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
});

// update (only admin)
router.put("/:id", async(req, res) => {
    const orderId = req.params.id

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { $set: req.body },
            { new: true}
        )
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err)
    }
})
// delete (only admin)
router.delete("/:id", async (req, res) => {
     const orderId = req.params.id;
    try {
        await Order.findByIdAndDelete(orderId)
        res.status(200).json("Deleted successfully")
    } catch (err) {
        res.status(500).json(err)
    }
})

// get orders
router.get("/:id", async (req, res) => {
    
})
// get all orders (only admin)

// aggregate sales by last two months
export default router;
