// Pantry Staff Routes
app.post("/api/pantry-staff", async (req, res) => {
  const pantryStaff = new PantryStaff(req.body);
  await pantryStaff.save();
  res.status(201).send(pantryStaff);
});

// Delivery Personnel Routes
app.post("/api/delivery-personnel", async (req, res) => {
  const deliveryPerson = new DeliveryPersonnel(req.body);
  await deliveryPerson.save();
  res.status(201).send(deliveryPerson);
});

// Meal Delivery Routes
app.post("/api/meal-deliveries", async (req, res) => {
  const mealDelivery = new MealDelivery(req.body);
  await mealDelivery.save();
  res.status(201).send(mealDelivery);
});

app.put("/api/meal-deliveries/:id", async (req, res) => {
  const mealDelivery = await MealDelivery.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.send(mealDelivery);
});