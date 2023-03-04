const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");
const requireAuth = require("../middlewares/requireAuth");

// router
const router = express.Router();

router.use(requireAuth);

// routes
// GET all projects
router.get("/", getAllProjects);

// GET single project
router.get("/:id", getSingleProject);

// PORT a new project
router.post("/", postProject);

// DELETE a project
router.delete("/:id", deleteProject);

// PATCH a project
router.patch("/:id", updateProject);

module.exports = router;
