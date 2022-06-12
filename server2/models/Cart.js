// const mongoose = require("mongoose");

import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      required: true,
      ref: "Users", 
      required: true },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId, 
          required: true,
          ref: "Product"
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);