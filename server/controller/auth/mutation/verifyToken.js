const {
  verifyToken,
  createUserTokens,
} = require("../../../utils/tokenGenerator");
const Errors = require("../../../errors/auth");
const ApiError = require("../../../errors/apiError");
const { verify } = require("jsonwebtoken");
const ENV = require("../../../config/env-config");

const User = require("../../../model/User.model");

const VerifyCode = async (req, res, next) => {
  const { email, code } = req.body;

  if (email) {
    const userData = await User.findOne({
      email,
    });

    if (!userData)
      return next(ApiError.badRequest(Errors.LOGIN_USER_NOT_FOUND.message));

    if (userData && userData.emailConfirmCode) {
      // try {
      const data = verify(userData.emailConfirmCode, ENV.JWT_SECRET);

      if (data.code === code) {
        const userDataUpdate = await User.updateOne(
          {
            email,
          },
          { isEmailConfirmed: true }
        );

        const userID = await User.findOne(
          {
            email,
          },
          { _id: 1 }
        );

        if (userDataUpdate.matchedCount == 1 && userID) {
          const { refreshToken, accessToken } = createUserTokens(
            userID,
            true,
            false
          );

          res.status(200).json({
            status: 200,
            description: "Successfully verified code",
            result: { accessToken, refreshToken, userData },
          });
        } else
          return next(ApiError.badRequest(Errors.CONFIRM_CODE_WRONG.message));
      }
    }
  }
};

module.exports = {
  VerifyCode,
};
