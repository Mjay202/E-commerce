import express from "express";

import User from "../models/User.js";
import pkg from "crypto-js";
import jpkg from "jsonwebtoken";


const { sign } = jpkg

const { AES, enc } = pkg
const router = express.Router();


// Register Route
router.post("/register", async (req, res) => {
  const registered = await User.findOne({ email: req.body.email });
  if (registered) return  res.status(401).json("This email has been registered already");

  // CREATE FUNC MONGODB
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    email: req.body.email,
    password: AES.encrypt(
      req.body.password,
      process.env.PASS_SEC_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // READ FUNC MONGODB
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("Not registered");

    const hashedPassword = AES.decrypt(user.password, process.env.PASS_SEC_KEY);

    const decryptedPassword = hashedPassword.toString(enc.Utf8);
    

    if (decryptedPassword !== req.body.password)
      return res.status(400).json("Incorrect password. Try again!");

    const { password, ...others } = user._doc;

    const access_token = sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC_KEY,
      { expiresIn: "3d" }
    );

    return res
      .status(200)
      .cookie("access_token", access_token, { httpOnly: false })
      .json({ ...others });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
