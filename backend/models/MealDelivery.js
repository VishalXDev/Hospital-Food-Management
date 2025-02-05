const mongoose = require("mongoose");

const mealDeliverySchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  deliveryPersonnelId: { type: mongoose.Schema.Types.ObjectId, ref: "DeliveryPersonnel" },
  status: { type: String, default: "Pending" },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MealDelivery", mealDeliverySchema);