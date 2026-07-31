import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterDonor from "./pages/RegisterDonor";
import SearchDonors from "./pages/SearchDonors";
import Dashboard from "./pages/Dashboard";
import EmergencyRequest from "./pages/EmergencyRequest";
import DonorDetails from "./pages/DonorDetails";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterDonor />} />
        <Route path="/search" element={<SearchDonors />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/emergency" element={<EmergencyRequest />} />

        {/* New Route */}
        <Route path="/donor/:id" element={<DonorDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;