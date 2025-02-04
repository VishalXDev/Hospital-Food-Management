import { useEffect, useState } from "react";
import axios from "axios";
import PatientForm from "../components/PatientForm";

const HospitalManager = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patients").then((response) => {
      setPatients(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Hospital Food Manager Dashboard</h1>
      <PatientForm />
      <h2>Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalManager;