const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db-config");

// ROUTERS
const authRouter = require("./router/auth/auth.router");
const userRouter = require("./router/user/user.router");
const productRouter = require("./router/product/product.router");
const purchaseRouter = require("./router/purchase/purchase.router");

// ERROR HANDLER
const apiErrorHandler = require("./middleware/apiErrorHandler");

// CONNECTION
connectDB();
//middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

// ROUTES
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/purchase", purchaseRouter);
app.use(apiErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
