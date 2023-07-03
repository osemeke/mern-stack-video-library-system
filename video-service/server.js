const express = require("express");
const dotenv = require("dotenv").config(); // dotenv.config({ path: './.env' });

const app = express();
app.use(express.json()); // to accepts requests with json body


const clips = require("./routes/clips");
app.use("/clips", clips);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
