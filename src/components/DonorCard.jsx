function DonorCard({ name, bloodGroup, city, availability }) {
  return (
    <div className="donor-card">

      <h3>{name}</h3>

      <p>
        <strong>Blood Group:</strong> {bloodGroup}
      </p>

      <p>
        <strong>City:</strong> {city}
      </p>

      <p>
        <strong>Availability:</strong> {availability}
      </p>

      <button>Contact Donor</button>

    </div>
  );
}

export default DonorCard;