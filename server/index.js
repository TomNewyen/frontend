const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");


const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/server/users", userRoute);
app.use("/server/auth", authRoute);
app.use("/server/products", productRoute);
app.use("/server/carts", cartRoute);
app.use("/server/orders", orderRoute);
app.use("/server/checkout", stripeRoute);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"))
    .catch((err) => {
        console.log(err);
    });

app.listen(process.env.PORT || 3001, () => {
    console.log("Running on 3001");
});