const mongoose = require("mongoose");

const deliveryPersonnelSchema = new mongoose.Schema({
  name: String,
  contactInfo: String,
});

module.exports = mongoose.model("DeliveryPersonnel", deliveryPersonnelSchema);