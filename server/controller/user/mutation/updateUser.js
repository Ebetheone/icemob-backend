const bcrypt = require("bcrypt");
const Errors = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");
const User = require("../../../model/User.model");

const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const {
    // userName,
    // password,
    lastName,
    firstName,
    phoneNumber,
    district,
    khoroo,
  } = req.body;

  // let _data = {
  //   lastName,
  //   firstName,
  //   phoneNumber,
  //   district,
  //   khoroo,
  // };

  const updatedUser = await User.findByIdAndUpdate(
    { _id: id },
    {
      firstName,
      lastName,
      phoneNumber,
      address: {
        district,
        khoroo,
      },
    }
  ).catch((error) => {
    console.log(error);
    return res.status(500).json({
      description: "ERROR on updating user",
      result: false,
    });
  });
  console.log(updatedUser);
  if (updatedUser.address.district && updatedUser.address.khoroo)
    return res.status(200).json({
      description: "Successfully updated user",
      result: updatedUser,
    });
};
module.exports = {
  UpdateUser,
};
