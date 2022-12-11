const Purchase = require("../../../model/Purchase");

const CreatePurchase = async (req, res) => {
  const { user, products } = req.body;
  console.log(req.body);
  const data = await Purchase.create({
    user: user._id,
    product: products[0].id,
  }).catch((err) => console.log(err));
  console.log(data);
};

module.exports = {
  CreatePurchase,
};
