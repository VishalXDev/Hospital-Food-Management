import { useEffect, useState } from "react";
import axios from "axios";

const InnerPantry = () => {
  const [mealDeliveries, setMealDeliveries] = useState([]);
  const [deliveryPersonnel, setDeliveryPersonnel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch meal deliveries with populated patient data
        const deliveriesResponse = await axios.get("http://localhost:5000/api/meal-deliveries");
        setMealDeliveries(deliveriesResponse.data);

        // Fetch delivery personnel
        const personnelResponse = await axios.get("http://localhost:5000/api/delivery-personnel");
        setDeliveryPersonnel(personnelResponse.data);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Inner Pantry Dashboard</h1>
      
      <h2>Meal Deliveries</h2>
      <ul>
        {mealDeliveries.map((delivery) => (
          <li key={delivery._id}>
            {/* Add null-check for nested objects */}
            Patient: {delivery.patientId?.name || 'Unknown Patient'} - 
            Status: {delivery.status}
          </li>
        ))}
      </ul>

      <h2>Delivery Personnel</h2>
      <ul>
        {deliveryPersonnel.map((person) => (
          <li key={person._id}>
            {person.name} - {person.contactInfo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InnerPantry;