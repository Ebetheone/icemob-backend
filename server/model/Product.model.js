const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: null },
    img: [{ name: String, description: { type: String, default: null } }],
    type: [{ name: String, description: { type: String, default: null } }],
    category: [{ name: String, description: { type: String, default: null } }],
    price: { type: Number, required: true },
    userClicks: { type: Number, required: false, default: 0 },
    isOnSale: { type: Boolean, required: false, default: false },
    saleAmount: { type: Number, required: false, default: 0 },
    salePercentage: { type: Number, required: false, default: 0 },
    created_at: { type: Date, required: false, default: Date.now },
    updated_at: { type: Date, required: false, default: Date.now },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Product", productSchema);
