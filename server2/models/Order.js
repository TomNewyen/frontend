// const mongoose = require("mongoose");

import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      required: true,
      ref: "Users"
    },
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
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Order", OrderSchema);

const Order = mongoose.model("Order", OrderSchema);

export default Order;