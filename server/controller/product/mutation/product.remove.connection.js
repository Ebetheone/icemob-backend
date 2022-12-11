const Product = require("../../../model/Product.model");

const ProductRemoveConnection = async (req, res) => {
  await Product.deleteMany();

  res.status(200).json({
    description: "Successfully deleted all Product",
  });
};

module.exports = {
  ProductRemoveConnection,
};
