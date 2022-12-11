const ApiError = require("../errors/apiError");

const ApiErrorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    res
      .status(err.code)
      .json({ error: { code: err.code, message: err.message } });
    return;
  }

  res.status(500).json("Something went wrong");
};

module.exports = ApiErrorHandler;
