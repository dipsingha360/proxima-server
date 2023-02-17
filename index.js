const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projectRoute");
require("dotenv").config();

// experess app
const app = express();

// port
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/projects", projectRoutes);

// mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen request
    app.listen(port, () => {
      console.log(`Connected to mongodb and listing on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
