require("dotenv").config();
const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const userRouter = require("./src/router/user.router");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});