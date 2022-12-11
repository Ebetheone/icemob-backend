const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  productId: { Object },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

module.exports = mongoose.model("Purchase", purchaseSchema);
