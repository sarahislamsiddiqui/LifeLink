import { useNavigate } from "react-router-dom";

function DonorCard({ donor }) {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate(`/donor/${donor.id}`, {
      state: { donor },
    });
  };

  return (
    <div className="donor-card">
      <h3>{donor.name}</h3>

      <p>
        <strong>Blood Group:</strong> {donor.bloodGroup}
      </p>

      <p>
        <strong>City:</strong> {donor.city}
      </p>

      <p>
        <strong>Availability:</strong>{" "}
        {donor.available ? "Available" : "Not Available"}
      </p>

      <button onClick={handleContact}>
        Contact Donor
      </button>
    </div>
  );
}

export default DonorCard;