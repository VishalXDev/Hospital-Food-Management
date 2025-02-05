import { useEffect, useState } from "react";
import axios from "axios";

const DeliveryPersonnel = () => {
  const [assignedDeliveries, setAssignedDeliveries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/meal-deliveries").then((response) => {
      setAssignedDeliveries(response.data);
    });
  }, []);

  const markAsDelivered = async (deliveryId) => {
    await axios.put(`http://localhost:5000/api/meal-deliveries/${deliveryId}`, {
      status: "Delivered",
    });
    alert("Delivery marked as completed!");
  };

  return (
    <div>
      <h1>Delivery Personnel Dashboard</h1>
      <h2>Assigned Deliveries</h2>
      <ul>
        {assignedDeliveries.map((delivery) => (
          <li key={delivery._id}>
            {delivery.patientId.name} - {delivery.status}
            <button onClick={() => markAsDelivered(delivery._id)}>
              Mark as Delivered
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryPersonnel;