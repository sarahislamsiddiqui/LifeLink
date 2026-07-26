function SearchBar() {
  return (
    <div className="search-bar">

      <select>
        <option value="">Select Blood Group</option>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
      </select>

      <input
        type="text"
        placeholder="Enter City"
      />

      <button>
        Search
      </button>

    </div>
  );
}

export default SearchBar;