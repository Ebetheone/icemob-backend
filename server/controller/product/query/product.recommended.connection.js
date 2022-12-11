const bcrypt = require("bcrypt");
const Errors = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");
const Product = require("../../../model/Product.model");

const ProductRecommendedConnection = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const product = await Product.findById({ _id: id }, { category: true });

  let categories = product.category.map((item) => item.name);
  const productList = await Product.find({
    category: {
      $elemMatch: {
        name: categories,
      },
    },
  })
    .skip(0)
    .limit(8)
    .sort({ userClicks: -1 });

  res.status(200).json({
    description: "Successfully fetched recommended products",
    result: productList,
  });
};

module.exports = {
  ProductRecommendedConnection,
};
