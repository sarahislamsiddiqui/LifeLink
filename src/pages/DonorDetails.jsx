import { useLocation, useNavigate } from "react-router-dom";

function DonorDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const donor = state?.donor;

  if (!donor) {
    return (
      <div className="donor-details">
        <h2>Donor not found</h2>
        <button onClick={() => navigate("/search")}>
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <div className="donor-details">
      <h1>Donor Details</h1>

      <p>
        <strong>Name:</strong> {donor.name}
      </p>

      <p>
        <strong>Blood Group:</strong> {donor.bloodGroup}
      </p>

      <p>
        <strong>City:</strong> {donor.city}
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        <a href={`tel:${donor.phone}`}>
          {donor.phone}
        </a>
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${donor.email}`}>
          {donor.email}
        </a>
      </p>

      <p>
        <strong>Availability:</strong>{" "}
        {donor.available ? "Available" : "Not Available"}
      </p>

      <br />

      <button
        onClick={() => window.location.href = `tel:${donor.phone}`}
      >
        📞 Call Donor
      </button>

      <button
        onClick={() => navigate("/search")}
        style={{ marginLeft: "10px" }}
      >
        ← Back to Search
      </button>
    </div>
  );
}

export default DonorDetails;