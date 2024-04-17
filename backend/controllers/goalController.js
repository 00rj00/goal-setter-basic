const asyncHandler = require('express-async-handler')
const getGoals = asyncHandler( (req, res) => {
    res.status(200).json({ mwssage: "getGoals" });
})

const setGoal = asyncHandler( (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text");
  }
})

const updateGoal = asyncHandler( (req, res) => {
  res.status(200).json({ mwssage: `updateGoal ${req.params.id}` });
})

const deleteGoal = asyncHandler( (req, res) => {
  res.status(200).json({ mwssage: `deleteGoal ${req.params.id}` });
})

module.exports = {getGoals, setGoal, updateGoal, deleteGoal}
