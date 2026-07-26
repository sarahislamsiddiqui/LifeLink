import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DonorCard from "../components/DonorCard";
import "../styles/search.css";

function SearchDonors() {

  const donors = [
    {
      name: "Ahmed Khan",
      bloodGroup: "O+",
      city: "Mumbai",
      availability: "Available"
    },
    {
      name: "Sara Ali",
      bloodGroup: "A+",
      city: "Delhi",
      availability: "Available"
    },
    {
      name: "Rahul Sharma",
      bloodGroup: "B+",
      city: "Pune",
      availability: "Not Available"
    },
    {
      name: "Fatima Noor",
      bloodGroup: "AB+",
      city: "Hyderabad",
      availability: "Available"
    },
    {
      name: "Mohit Verma",
      bloodGroup: "O-",
      city: "Bangalore",
      availability: "Available"
    }
  ];

  const [filteredDonors, setFilteredDonors] = useState(donors);
const [bloodGroup, setBloodGroup] = useState("");
const [city, setCity] = useState("");
const handleSearch = () => {

  const result = donors.filter((donor) => {

    const matchBlood =
      bloodGroup === "" || donor.bloodGroup === bloodGroup;

    const matchCity =
      city === "" ||
      donor.city.toLowerCase().includes(city.toLowerCase());

    return matchBlood && matchCity;

  });

  setFilteredDonors(result);

};

  return (
    <div className="search-page">

      <h1>Search Blood Donors</h1>

      <p className="search-text">
        Find blood donors by selecting a blood group and entering the city.
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
        availability={donor.availability}
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