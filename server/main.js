const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
