import { useState } from "react";
import axios from "axios";

const DietChartForm = () => {
  const [formData, setFormData] = useState({
    patientId: "",
    morningMeal: "",
    eveningMeal: "",
    nightMeal: "",
    instructions: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/diet-charts", formData);
    alert("Diet chart added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient ID"
        value={formData.patientId}
        onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
      />
      <input
        type="text"
        placeholder="Morning Meal"
        value={formData.morningMeal}
        onChange={(e) => setFormData({ ...formData, morningMeal: e.target.value })}
      />
      <input
        type="text"
        placeholder="Evening Meal"
        value={formData.eveningMeal}
        onChange={(e) => setFormData({ ...formData, eveningMeal: e.target.value })}
      />
      <input
        type="text"
        placeholder="Night Meal"
        value={formData.nightMeal}
        onChange={(e) => setFormData({ ...formData, nightMeal: e.target.value })}
      />
      <input
        type="text"
        placeholder="Instructions"
        value={formData.instructions}
        onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
      />
      <button type="submit">Add Diet Chart</button>
    </form>
  );
};

export default DietChartForm;