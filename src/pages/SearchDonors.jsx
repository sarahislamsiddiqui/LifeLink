import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DonorCard from "../components/DonorCard";
import "../styles/search.css";
import donorsData from "../data/donors.json";

function SearchDonors() {
  const [filteredDonors, setFilteredDonors] = useState(donorsData);
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    const result = donorsData.filter((donor) => {
      const matchBlood =
        bloodGroup === "" || donor.bloodGroup === bloodGroup;

      const matchCity =
        city === "" ||
        donor.city.toLowerCase().includes(city.toLowerCase());

      return matchBlood && matchCity && donor.available;
    });

    setFilteredDonors(result);
  };

  return (
    <div className="search-page">
      <h1>Search Blood Donors</h1>
      <p className="search-text">
        Find blood donors by selecting a blood group and city
      </p>

      <SearchBar
        bloodGroup={bloodGroup}
        setBloodGroup={setBloodGroup}
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
      />

      <div className="donor-list">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor, index) => (
            <DonorCard
              key={index}
              name={donor.name}
              bloodGroup={donor.bloodGroup}
              city={donor.city}
              availability={donor.available ? "Available" : "Not Available"}
            />
          ))
        ) : (
          <h2>No donors found.</h2>
        )}
      </div>
    </div>
  );
}

export default SearchDonors;