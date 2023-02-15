const express = require("express");
require("dotenv").config();

// experess app
const app = express();

// port
const port = process.env.PORT || 4000;

// listen request
app.listen(port, () => {
  console.log(`Listing on port ${port}`);
});
