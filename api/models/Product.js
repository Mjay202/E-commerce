import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true,},
    img: { type: String, required: true },
    categories: { type: Array, },
    size: { type: String },
    color: { type: String },
    price: { type: String, require: true  },
   
  },
  { timestamps: true }
);

export default model("Product", ProductSchema);
