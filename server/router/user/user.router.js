const express = require("express");

const { RemoveUser } = require("../../controller/user/mutation/removeUser");
const { UpdateUser } = require("../../controller/user/mutation/updateUser");
const { UserGuest } = require("../../controller/user/query/user");
const {
  UserConnection,
} = require("../../controller/user/query/user.connection");
const router = express.Router();

// ROUTES
router.get("/all", UserConnection);

// BY ID
router.get("/:id", UserGuest);
router.delete("/delete/:id", RemoveUser);
router.put("/update/:id", UpdateUser);

module.exports = router;
