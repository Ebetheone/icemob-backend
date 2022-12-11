const bcrypt = require("bcrypt");
const Errors = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");
const Product = require("../../../model/Product.model");

const ProductHighlightConnection = async (req, res) => {
  const productList = await Product.find()
    .skip(0)
    .limit(8)
    .sort({ userClicks: -1 });

  res.status(200).json({
    description: "Successfully fetched highlight products",
    result: productList,
  });
};

module.exports = {
  ProductHighlightConnection,
};
