const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    isEmailConfirmed: { type: Boolean, required: true, default: false },
    isPhoneConfirmed: { type: Boolean, required: true, default: false },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    age: { type: Number, default: null },
    gender: { type: String, default: null },
    email: { type: String, default: null },
    emailConfirmCode: { type: String, default: null },
    phoneNumber: { type: String, default: null },
    phoneNumberCode: { type: String, default: "976" },
    phoneNumberConfirmCode: { type: String, default: null },
    address: {
      district: { type: String, default: null },
      khoroo: { type: String, default: null },
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", userSchema);
