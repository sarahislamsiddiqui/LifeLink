import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import DonorCard from "../components/DonorCard";
import "../styles/search.css";
import { getDonors } from "../services/api";

function SearchDonors() {
  const [allDonors, setAllDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
  getDonors().then((res) => {
    console.log(res.data);
    setAllDonors(res.data);
    setFilteredDonors(res.data);
  });
}, []);

  const handleSearch = () => {
    const result = allDonors.filter((donor) => {
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
          filteredDonors.map((donor) => (
            <DonorCard
              key={donor.id}
              donor={donor}
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