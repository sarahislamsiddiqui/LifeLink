import { useState } from "react";
import { addRequest } from "../services/api";
import "../styles/register.css";

function EmergencyRequest() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [patientName, setPatientName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("");
  const [hospital, setHospital] = useState("");
  const [city, setCity] = useState("");
  const [urgency, setUrgency] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      patientName,
      bloodGroup,
      units,
      hospital,
      city,
      urgency,
      phone,
      status: "Pending",
    };

    try {
      await addRequest(requestData);
      setErrorMessage("");
      setSuccessMessage("✅ Emergency request submitted successfully!");

      // Reset form
      setPatientName("");
      setBloodGroup("");
      setUnits("");
      setHospital("");
      setCity("");
      setUrgency("");
      setPhone("");
    } catch (err) {
      setSuccessMessage("");
      setErrorMessage("❌ Failed to submit request. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <h1>Emergency Blood Request</h1>

      {successMessage && (
        <div className="success-banner">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="error-banner">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit}>
        <label>Patient Name</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          placeholder="Enter patient's name"
          required
        />

        <label>Blood Group Needed</label>
        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <label>Units Required</label>
        <input
          type="number"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          placeholder="Enter number of units"
          required
        />

        <label>Hospital Name</label>
        <input
          type="text"
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
          placeholder="Enter hospital name"
          required
        />

        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          required
        />

        <label>Urgency</label>
        <select
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
          required
        >
          <option value="">Select Urgency</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>

        <label>Contact Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter contact number"
          required
        />

        <button type="submit">Submit Request</button>
        <button type="reset">Reset Form</button>
      </form>
    </div>
  );
}

export default EmergencyRequest;