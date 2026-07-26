import "../styles/register.css";

function RegisterDonor() {
  return (
    <div className="register-container">

      <h1>Register as a Blood Donor</h1>

      <form className="register-form">

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Age</label>
        <input type="number" placeholder="Enter your age" />

        <label>Gender</label>
        <select>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Blood Group</label>
        <select>
          <option>Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter phone number" />

        <label>Email</label>
        <input type="email" placeholder="Enter email" />

        <label>City</label>
        <input type="text" placeholder="Enter city" />

        <label>State</label>
        <input type="text" placeholder="Enter state" />

        <label>Last Donation Date</label>
        <input type="date" />

        <label>Availability</label>

        <div className="radio-group">
          <label>
            <input type="radio" name="availability" />
            Available
          </label>

          <label>
            <input type="radio" name="availability" />
            Not Available
          </label>
        </div>

        <button type="submit">
          Register Donor
        </button>

      </form>

    </div>
  );
}

export default RegisterDonor;