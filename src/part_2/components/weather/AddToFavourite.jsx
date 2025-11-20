import React, { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../../assets/heart-red.svg";
import HeartIcon from "../../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

const AddToFavourite = () => {
  const { addToFavourites, removeFromFavourites, favourite } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  const [isFav, toggleFav] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourite.find((fav) => fav.location === location);
    if (found) toggleFav(found);
  }, []);
  const handleFavourite = () => {
    const found = favourite.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    toggleFav(!isFav);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFav ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
