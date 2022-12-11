const Product = require("../../model/Product.model");

const insertProduct = async (req, res) => {
  // const { productName, password, email } = req.body;
  // console.dir(productName);

  await Product.insertMany(products);

  res.status(200).json({
    description: "Successfully created Product",
  });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { ProductName, password, email } = req.body;
  await Product.findByIdAndUpdate(
    id,
    {
      ProductName,
      password,
      email,
    },
    { new: true }
  );

  res.status(200).json({
    description: "Successfully updated Product",
  });
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  await Product.deleteMany();

  res.status(200).json({
    description: "Successfully deleted Product",
  });
};
const searchProduct = async (req, res) => {
  const { search } = req.body;
  const data = await Product.find({
    $or: [{ title: search }, { description: search }],
  });
  console.log(search);
  res.status(200).json({
    description: "Successfully Serched Product",
    result: data,
  });
};

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  removeProduct,
  insertProduct,
  searchProduct,
};
