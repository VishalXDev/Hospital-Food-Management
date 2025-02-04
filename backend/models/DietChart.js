const mongoose = require("mongoose");

const dietChartSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  morningMeal: String,
  eveningMeal: String,
  nightMeal: String,
  instructions: String,
});

module.exports = mongoose.model("DietChart", dietChartSchema);