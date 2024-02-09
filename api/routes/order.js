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
router.put("/:id", async (req, res) => {
    const orderId = req.params.id

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err)
    }
});

// delete (only admin)
router.delete("/:id", async (req, res) => {
    const orderId = req.params.id;
    try {
        await Order.findByIdAndDelete(orderId)
        res.status(200).json("Deleted successfully")
    } catch (err) {
        res.status(500).json(err)
    }
});

// get orders
router.get("/:id", async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.id })
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
});

// get all orders (only admin)
router.get("/", async (req, res) => {
    try {
        const allOrders = await Order.find()
        res.status(200).json(allOrders)
    } catch (err) {
        res.status(500).json(err)
    }
});

// aggregate sales by last two months
router.get("/", async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));
    try {
        const sales = await Order.aggregate([
            {$match: {createdAt: {$gte: prevMonth}}},
            {
                $project:
                    { month: { $month: "createdAt" } },
                    sales: "$amount" 
                
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: "$sales"}
                }
            }
        ])
        res.status(200).json(sales)
    } catch (err) {
        res.status(500).json(err)
    }
});
export default router;
