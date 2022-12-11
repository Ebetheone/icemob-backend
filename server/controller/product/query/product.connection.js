const bcrypt = require("bcrypt");
const Errors = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");
const Product = require("../../../model/Product.model");

const ProductConnection = async (req, res) => {
  const productList = await Product.find();

  res.status(200).json({
    description: "Successfully fetched all products",
    result: productList,
  });
};

module.exports = {
  ProductConnection,
};
