const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

const setGoals = (req, res) => {
  if (!req.body.text) {
    throw new Error("Please add a text field! ")
  }
  res.status(200).json({ message: req.body.text });
};

const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update goal for ${req.params.id}` });
};

const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete goal for ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
