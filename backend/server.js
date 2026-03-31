const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
console.log("Ma variable URI est :", process.env.MONGO_URI);
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));