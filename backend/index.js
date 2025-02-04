const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Patient = require("./models/Patient");
const DietChart = require("./models/DietChart");
const PantryStaff = require("./models/PantryStaff");
const DeliveryPersonnel = require("./models/DeliveryPersonnel");
const MealDelivery = require("./models/MealDelivery");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => res.send("Hospital Food Management System"));

// Patient Routes
app.post("/api/patients", async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.status(201).send(patient);
});

app.get("/api/patients", async (req, res) => {
  const patients = await Patient.find();
  res.send(patients);
});

// Diet Chart Routes
app.post("/api/diet-charts", async (req, res) => {
  const dietChart = new DietChart(req.body);
  await dietChart.save();
  res.status(201).send(dietChart);
});

app.get("/api/diet-charts", async (req, res) => {
  const dietCharts = await DietChart.find().populate("patientId");
  res.send(dietCharts);
});

// Add more routes for PantryStaff, DeliveryPersonnel, and MealDelivery

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));