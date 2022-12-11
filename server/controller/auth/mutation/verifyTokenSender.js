const { verifyToken } = require("../../../utils/tokenGenerator");
const ErrorsUser = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");
const { mailSender } = require("../../../utils/mail-sender/mailSender");

const User = require("../../../model/User.model");

const VerifyCodeSender = async (req, res, next) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  if (email) {
    const userData = await User.findOne({
      email,
    });
    if (!userData)
      return next(ApiError.badRequest(ErrorsUser.USER_NOT_FOUND.message));

    if (userData) {
      const emailVerifyToken = verifyToken({ email, code });
      const updateUser = await User.updateOne(
        {
          email,
        },
        {
          emailConfirmCode: emailVerifyToken,
        }
      );

      if (updateUser.matchedCount == 1) {
        mailSender({
          email,
          subject: "Email confirm code",
          content: `Email confirm code: ${code}`,
        });
        res.status(200).json({
          status: 200,
          description: "Mail Sent!!",
          result: true,
        });
      }
    }
  }
};

module.exports = {
  VerifyCodeSender,
};
