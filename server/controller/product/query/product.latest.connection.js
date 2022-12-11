const bcrypt = require("bcrypt");
const Errors = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");
const Product = require("../../../model/Product.model");

const ProductLatestConnection = async (req, res) => {
  const productList = await Product.find()
    .skip(0)
    .limit(8)
    .sort({ created_at: -1 });

  res.status(200).json({
    description: "Successfully fetched latest products",
    result: productList,
  });
};

module.exports = {
  ProductLatestConnection,
};
