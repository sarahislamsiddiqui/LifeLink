import SearchBar from "../components/SearchBar";
import DonorCard from "../components/DonorCard";
import "../styles/search.css";

function SearchDonors() {
  return (
    <div className="search-page">
      <h1>Search Blood Donors</h1>

      <p className="search-text">
        Find blood donors by selecting a blood group and entering the city.
      </p>

      <SearchBar />

      <div className="donor-list">
        <DonorCard />
        <DonorCard />
        <DonorCard />
      </div>
    </div>
  );
}

export default SearchDonors;