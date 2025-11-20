import React from "react";
import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavaouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useLocalStorage("favourites", []);
  const addToFavourites = (latitude, longitude, location) => {
    setFavourite([...favourite, { latitude, longitude, location }]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourite.filter((fav) => fav.location !== location);
    setFavourite(restFavourites);
  };
  return (
    <FavouriteContext.Provider
      value={{ addToFavourites, removeFromFavourites, favourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavaouriteProvider;
