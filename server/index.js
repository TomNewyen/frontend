const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");


const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");


dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/uers",userRoute);
app.use("/api/auth",authRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 3001, () => {
  console.log("Running on 3001");
});