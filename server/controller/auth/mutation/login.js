const bcrypt = require("bcrypt");
const ErrorsUser = require("../../../errors/user");
const { createUserTokens } = require("../../../utils/tokenGenerator");
const ApiError = require("../../../errors/apiError");
const User = require("../../../model/User.model");

const Login = async (req, res, next) => {
  const { email, password } = req.body;
  const userData = await User.findOne({
    email,
  });

  if (!userData)
    return next(ApiError.badRequest(ErrorsUser.USER_NOT_FOUND.message));

  const passwordMatch = await bcrypt.compare(
    String(password),
    String(userData.password)
  );

  const { refreshToken, accessToken } = createUserTokens(
    userData?._id,
    true,
    false
  );

  res.status(200).json({
    description: "Successfully logged in",
    result: {
      refreshToken,
      accessToken,
      userData,
    },
  });
};

module.exports = {
  Login,
};
