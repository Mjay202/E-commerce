import { Schema, model } from 'mongoose';




const UserSchema = new Schema(
  {
   
    firstname: { type: String, required: true },
    lastname: { type: String },
    email: { type: String, required: true, unique: true },
    phone: {type: Number},
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model("User", UserSchema);