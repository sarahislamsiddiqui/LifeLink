import { useState } from "react";
import { addDonor } from "../services/api";
import "../styles/register.css";

function RegisterDonor() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [lastDonationDate, setLastDonationDate] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (age < 18 || age > 65) {
      setErrorMessage("❌ Age must be between 18 and 65 years.");
      setSuccessMessage("");
      return;
    }

    if (phone.length !== 10) {
      setErrorMessage("❌ Phone number must contain exactly 10 digits.");
      setSuccessMessage("");
      return;
    }

    const donorData = {
      name,
      age: Number(age),
      gender,
      bloodGroup,
      phone,
      email,
      city,
      state,
      lastDonationDate,
      available: availability === "Available",
    };

    try {
      await addDonor(donorData);
      setErrorMessage("");
      setSuccessMessage("✅ Donor registered successfully!");

      // Reset form
      setName("");
      setAge("");
      setGender("");
      setBloodGroup("");
      setPhone("");
      setEmail("");
      setCity("");
      setState("");
      setLastDonationDate("");
      setAvailability("");
    } catch (err) {
      setSuccessMessage("");
      setErrorMessage("❌ Failed to register donor. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <h1>Register as a Blood Donor</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form className="register-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Age</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Blood Group</label>
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

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>City</label>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <label>State</label>
        <input
          type="text"
          placeholder="Enter state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />

        <label>Last Donation Date</label>
        <input
          type="date"
          value={lastDonationDate}
          onChange={(e) => setLastDonationDate(e.target.value)}
          required
        />

        <label>Availability</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="availability"
              value="Available"
              checked={availability === "Available"}
              onChange={(e) => setAvailability(e.target.value)}
            />
            Available
          </label>
          <label>
            <input
              type="radio"
              name="availability"
              value="Not Available"
              checked={availability === "Not Available"}
              onChange={(e) => setAvailability(e.target.value)}
            />
            Not Available
          </label>
        </div>

        <button type="submit">Register Donor</button>
        <button type="reset" className="reset-btn">Reset Form</button>
      </form>
    </div>
  );
}

export default RegisterDonor;