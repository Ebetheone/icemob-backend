const bcrypt = require("bcrypt");
const Errors = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");
const User = require("../../../model/User.model");

const UserGuest = async (req, res) => {
  const { id } = req.params;
  const { email } = req.query;

  let user;
  if (id) user = await User.findById(req.params.id);
  if (email) {
    user = await User.findOne({
      email,
    });
  }

  res.status(200).json({
    description: "Successfully fetched data by id",
    result: user,
  });
};

module.exports = {
  UserGuest,
};
