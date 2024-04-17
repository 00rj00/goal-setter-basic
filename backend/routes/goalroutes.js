const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
  getGoalById,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect,getGoals).post(protect, setGoal);

router.route("/:id").get(protect,getGoalById).delete(protect,deleteGoal).put(protect,updateGoal);

// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
