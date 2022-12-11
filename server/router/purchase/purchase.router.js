const express = require("express");
const {
  CreatePurchase,
} = require("../../controller/purchase/mutation/purchase.create");
const router = express.Router();

// POST
router.post("/create", CreatePurchase);
// router.delete("/delete-all", ProductRemoveConnection);
// router.post("/search", searchProduct);
// BY ID
// router.put("/update/:id", updateProduct);

module.exports = router;
