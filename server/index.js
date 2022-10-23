const express = require("express");
const bodyParser = require("body-parser");
const userService = require('./users/service');
require('./db/db');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use("/user", userService);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});