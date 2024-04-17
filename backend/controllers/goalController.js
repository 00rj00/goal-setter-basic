const getGoals = (req, res) => {
    res.status(200).json({ mwssage: "getGoals" });
}

const setGoal = (req, res) => {
  res.status(200).json({ mwssage: "createGoal" });
};

const updateGoal = (req, res) => {
  res.status(200).json({ mwssage: `updateGoal ${req.params.id}` });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ mwssage: `deleteGoal ${req.params.id}` });
};

module.exports = {getGoals, setGoal, updateGoal, deleteGoal}
