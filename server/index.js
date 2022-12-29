const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('./db/db');
const userService = require('./users/service');
const photoService = require('./photos/service');

const PORT = process.env.PORT || 8080;
const app = express();

const corsOptions = {
  origin:'*',
  credentials: true,
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use("/users", userService);
app.use("/photos", photoService);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});