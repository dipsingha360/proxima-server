const express = require("express");

// router
const router = express.Router();

// routes
// GET all projects
router.get("/", (req, res) => {
  res.json({ message: "GET all projects" });
});

// GET single project
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single projects" });
});

// PORT a new project
router.post("/", (req, res) => {
  res.json({ message: "POST a new project" });
});

// DELETE a project
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a project" });
});

// PATCH a project
router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH a project" });
});

module.exports = router;
