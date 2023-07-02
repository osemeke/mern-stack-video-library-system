const express = require("express");
const app = express();

const clips = require("./routes/clips");
app.use("/clips", clips);

app.listen(3000, () => console.log("Listening on port 3000"));
