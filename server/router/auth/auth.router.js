const express = require("express");
const router = express.Router();

const { Login } = require("../../controller/auth/mutation/login");
const { Register } = require("../../controller/auth/mutation/register");
const { VerifyCode } = require("../../controller/auth/mutation/verifyToken");
const {
  VerifyCodeSender,
} = require("../../controller/auth/mutation/verifyTokenSender");
const { RemoveUser } = require("../../controller/user/mutation/removeUser");
const { UpdateUser } = require("../../controller/user/mutation/updateUser");
const { UserGuest } = require("../../controller/user/query/user");
const {
  UserConnection,
} = require("../../controller/user/query/user.connection");

// ROUTES
router.post("/register", Register);
router.post("/login", Login);
router.get("/users/all", UserConnection);
router.get("/user", UserGuest);
router.get("/user/:id", UserGuest);
router.delete("/remove/:id", RemoveUser);
router.put("/user/update/:id", UpdateUser);

// VERIFICATION
router.post("/verify-code", VerifyCode);
router.post("/verify-code-send", VerifyCodeSender);

module.exports = router;
