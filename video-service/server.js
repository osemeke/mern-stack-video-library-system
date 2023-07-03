const express = require("express");
const dotenv = require("dotenv").config(); // dotenv.config({ path: './.env' });

const app = express();
app.use(express.json()); // to accepts requests with json body

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

// default route
app.get('/', (req, res) => {
    res.send(process.env.API_NAME);
});

// routes
const clips = require("./routes/clips");
app.use("/clips", clips);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
