const express = require("express");
const router = express.Router();

const { ProductGuest } = require("../../controller/product/query/product");
const {
  ProductConnection,
} = require("../../controller/product/query/product.connection");

const {
  ProductCreate,
} = require("../../controller/product/mutation/product.create");
const {
  ProductRemoveConnection,
} = require("../../controller/product/mutation/product.remove.connection");
const {
  ProductLatestConnection,
} = require("../../controller/product/query/product.latest.connection");
const {
  ProductHighlightConnection,
} = require("../../controller/product/query/product.highlight.connection");
const {
  ProductSaleConnection,
} = require("../../controller/product/query/product.sale.connection");
const {
  ProductRecommendedConnection,
} = require("../../controller/product/query/product.recommended.connection");

// ROUTES

// GET
router.get("/all", ProductConnection);
router.get("/latest", ProductLatestConnection);
router.get("/highlight", ProductHighlightConnection);
router.get("/on-sale", ProductSaleConnection);
router.get("/recommended/:id", ProductRecommendedConnection);
router.get("/:id", ProductGuest);

router.post("/create", ProductCreate);
router.delete("/delete-all", ProductRemoveConnection);
// router.post("/search", searchProduct);
// BY ID
// router.put("/update/:id", updateProduct);

module.exports = router;
