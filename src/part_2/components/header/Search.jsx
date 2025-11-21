import React, { useContext } from "react";
import SearchImage from "../../../assets/search.svg";
import { LocationContext } from "../../context";
import { useDebounce } from "../../hooks";
import { getLocationByName } from "../../utils/location-data";

const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext);

  const doBounce = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    doBounce(value);
  };

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChange}
          required
        />
        {/* <button type="submit"> */}
        <img src={SearchImage} />
        {/* </button> */}
      </div>
    </form>
  );
};

export default Search;
