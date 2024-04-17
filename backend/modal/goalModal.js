const { timeStamp } = require("console");
const mongoose = require("mongoose");

const goalSchmema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add your goal"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Goal", goalSchmema);
