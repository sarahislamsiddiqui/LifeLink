import "../styles/register.css";

function RegisterDonor() {
  return (
    <div className="register-container">

      <h1>Register as a Blood Donor</h1>

      <form className="register-form">

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required/>

        <label>Age</label>
        <input type="number" placeholder="Enter your age" required />

        <label>Gender</label>

        <select required>
           <option value="">Select Gender</option>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
           <option value="Other">Other</option>
        </select>

        <label>Blood Group</label>

        <select required>
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
        <input type="tel" placeholder="Enter phone number" required/>

        <label>Email</label>
        <input type="email" placeholder="Enter email" required/>

        <label>City</label>
        <input type="text" placeholder="Enter city" required/>

        <label>State</label>
        <input type="text" placeholder="Enter state" required/>

        <label>Last Donation Date</label>
        <input type="date" required />

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
        <button type="reset" className="reset-btn">
          Reset Form
        </button>

      </form>

    </div>
  );
}

export default RegisterDonor;