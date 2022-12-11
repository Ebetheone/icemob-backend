const bcrypt = require("bcrypt");
const { verifyToken } = require("../../../utils/tokenGenerator");
const { mailSender } = require("../../../utils/mail-sender/mailSender");
const Errors = require("../../../errors/user");
const ApiError = require("../../../errors/apiError");
const User = require("../../../model/User.model");

const Register = async (req, res, next) => {
  const { userName, password, email, isEmailConfirmed } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  if (email) {
    const userEmail = await User.findOne(
      {
        email,
      },
      { email: 1 }
    );
    if (userEmail)
      return next(ApiError.badRequest(Errors.EMAIL_ALREADY_USED.message));
    if (!userEmail) {
      const emailVerifyToken = verifyToken({ email, code });
      const createUser = await User.create({
        userName,
        email,
        password: passwordHash,
        emailConfirmCode: emailVerifyToken,
        isEmailConfirmed,
      });

      if (createUser.email) {
        mailSender({
          email: createUser.email,
          subject: "Email confirm code",
          content: `Email confirm code: ${code}`,
        });
      }
      res.status(200).json({
        status: 200,
        description: "Successfully created user",
      });
    }
  }
};

module.exports = {
  Register,
};
