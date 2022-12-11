const bcrypt = require("bcrypt");
const Errors = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");
const Product = require("../../../model/Product.model");

const ProductGuest = async (req, res) => {
  const { id } = req.params;

  // console.log(id);
  // const updated = await Product.findByIdAndUpdate(
  //   {
  //     _id: id,
  //   },
  //   { $inc: { userClicks: 1 } }
  // );

  const product = await Product.findById(id);

  res.status(200).json({
    description: "Successfully fetched all users",
    result: product,
  });
};

module.exports = {
  ProductGuest,
};
