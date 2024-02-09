import express from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "./verifyToken.js";
import User from "../models/User.js";
const router = express.Router();

// UPDATE USER RECORD
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// DELETE USER RECORD
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    return res.status(200).json("User deleted successefully");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET USER STATS THROUGH AGGREGATE QUERY
router.get("/stats", async (req, res) => {
  try {

          const date = new Date();
          const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
          const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { month: { $month: "$createdAt" } } },
            {
              $group: {
                _id: "$month",
                total: { $sum: 1 },
              },
            },
          ]);

      return res.status(200).json(data)

  } catch (err) {
      return res.status(500).json(err)
  }

});

// GET A USER RECORD
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});


// GET LAST 5 OR ALL USER RECORDS
router.get("/",  async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(2)
      : await User.find();

    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default router;
