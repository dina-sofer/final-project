const express = require("express");
const bodyParser = require("body-parser");
require('./db/db');
const userService = require('./users/service');
const photoService = require('./photos/service');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());

app.use("/user", userService);
app.use("/photo", photoService);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});