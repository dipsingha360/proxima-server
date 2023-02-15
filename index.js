const express = require("express");
const projectRoutes = require("./routes/projectRoute");
require("dotenv").config();

// experess app
const app = express();

// port
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/projects", projectRoutes);

// listen request
app.listen(port, () => {
  console.log(`Listing on port ${port}`);
});
