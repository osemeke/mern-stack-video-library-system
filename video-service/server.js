const express = require("express");
const dotenv = require("dotenv").config(); // dotenv.config({ path: './.env' });

const app = express();

const clips = require("./routes/clips");
app.use("/clips", clips);

app.listen(process.env.PORT, () =>
  console.log("Listening on port " + process.env.PORT)
);
