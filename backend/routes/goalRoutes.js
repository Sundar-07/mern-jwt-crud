const express = require("express");
const { getGoals, setGoals, updateGoals, deleteGoals } = require("../controllers/goalControllers");
const router = express.Router();

router.get("/", getGoals);
router.post("/", setGoals);
router.put("/:id", updateGoals);
router.delete("/:id", deleteGoals);

module.exports = router;
