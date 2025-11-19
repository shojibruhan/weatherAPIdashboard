import React from "react";
import HeartImage from "../../../assets/heart-red.svg";
const Favourite = () => {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={HeartImage} alt="heart" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Favourite;
