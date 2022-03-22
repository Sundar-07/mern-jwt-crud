const express = require("express");
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalControllers");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", protect, getGoals);
router.post("/", protect, setGoals);
router.put("/:id", protect, updateGoals);
router.delete("/:id", protect, deleteGoals);

module.exports = router;
