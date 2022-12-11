const bcrypt = require("bcrypt");
const Errors = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");
const Product = require("../../../model/Product.model");

const ProductSaleConnection = async (req, res) => {
  const productList = await Product.find({ isOnSale: true })
    .skip(0)
    .limit(8)
    .sort({ saleAmount: -1 });

  res.status(200).json({
    description: "Successfully fetched on sale products",
    result: productList,
  });
};

module.exports = {
  ProductSaleConnection,
};
