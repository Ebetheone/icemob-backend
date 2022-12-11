// import { Errors } from "@src/errors";
const jwt = require("jsonwebtoken");
const ENV = require("../config/env-config");

// import { Response } from "express-serve-static-core";

// type signAccessTokenType = {
//   userId: string;
//   mobile: boolean;
//   refreshToken: string;
// };

// type signRefreshTokenType = {
//   userId: string;
//   mobile: boolean;
//   isAdministrator: boolean;
// };
// type verifyTokenType = {
//   email?: string;
//   phoneNumber?: string;
//   code: string;
// };

const signAccessToken = ({ userId, refreshToken, mobile = false }) => {
  try {
    const accessToken = jwt.sign(
      {
        userId,
        mobile,
        refreshToken,
      },
      ENV.JWT_SECRET,
      {
        expiresIn: mobile
          ? ENV.USER_ACCESS_TOKEN_EXPIRE
          : ENV.ADMIN_ACCESS_TOKEN_EXPIRE,
      }
    );
    return accessToken;
  } catch (error) {
    throw error;
  }
};

const signRefreshToken = ({ userId, mobile, isAdministrator = false }) => {
  try {
    const refreshToken = jwt.sign(
      {
        userId,
        mobile,
      },
      ENV.JWT_SECRET,
      {
        expiresIn:
          isAdministrator || mobile
            ? ENV.ADMIN_REFRESH_TOKEN_EXPIRE
            : ENV.USER_REFRESH_TOKEN_EXPIRE,
      }
    );
    return refreshToken;
  } catch (error) {
    throw error;
  }
};

const createUserTokens = (userId, mobile, isAdministrator) => {
  // - JWT token
  const refreshToken = signRefreshToken({
    userId,
    mobile,
    isAdministrator,
  });
  const accessToken = signAccessToken({
    userId,
    refreshToken,
    mobile,
  });
  return { accessToken, refreshToken };
};

const verifyToken = ({ email, phoneNumber, code }) => {
  const verifyToken = jwt.sign(
    {
      email,
      phoneNumber,
      code,
    },
    ENV.JWT_SECRET,
    {
      expiresIn: ENV.VERIFY_TOKEN_EXPIRE,
    }
  );
  return verifyToken;
};

module.exports = {
  verifyToken,
  createUserTokens,
};
