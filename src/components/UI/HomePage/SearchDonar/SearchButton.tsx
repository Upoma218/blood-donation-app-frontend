"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchButton = () => {
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const router = useRouter();

  const onSearchHandler = () => {
    router.push(`/donors?filterType=${filterType}&filterValue=${filterValue}`);
  };
  return (
    <div className="join flex flex-col md:flex-row md:items-center mb-6">
      <div className="mb-2 md:mb-0">
        <input
          className="input input-bordered join-item"
          placeholder="Search"
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <div className="mb-2 md:mb-0">
        <label htmlFor="genre" className="sr-only">
          Select Genre
        </label>
        <select
          id="genre"
          className="select select-bordered join-item"
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option disabled selected>
            Filter
          </option>

          <option value="bloodType">Blood Type</option>
          <option value="location">Location</option>
          <option value="availabilty">Availability</option>
          <option value="searchTerm">SearchTerm</option>
        </select>
      </div>
      <div>
        <button
          className="btn bg-red-700 text-white font-bold join-item"
          onClick={onSearchHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchButton;
