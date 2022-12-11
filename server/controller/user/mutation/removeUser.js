const bcrypt = require("bcrypt");
const Errors = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");

const User = require("../../../model/User.model");

const RemoveUser = async (req, res) => {
  const { id } = req.params;
  await User.deleteMany();

  res.status(200).json({
    description: "Successfully deleted user",
  });
};
module.exports = {
  RemoveUser,
};
