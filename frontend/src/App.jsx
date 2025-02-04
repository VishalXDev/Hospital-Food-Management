import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HospitalManager from "./pages/HospitalManager";
import InnerPantry from "./pages/InnerPantry";
import DeliveryPersonnel from "./pages/DeliveryPersonnel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HospitalManager />} />
        <Route path="/pantry" element={<InnerPantry />} />
        <Route path="/delivery" element={<DeliveryPersonnel />} />
      </Routes>
    </Router>
  );
}

export default App;