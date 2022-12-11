const User = require("../../../model/User.model");

const UserConnection = async (req, res) => {
  const UserList = await User.find();

  res.status(200).json({
    description: "Successfully fetched all Products",
    result: UserList,
  });
};

module.exports = {
  UserConnection,
};
