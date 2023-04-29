import React from "react";
import locationSign from "../assets/location-sign.png";

interface SearchBoxProps {
  setWeather: (newWeather: any) => void;
}

const weatherApi = {
  key: "839fe94c6921794a7c2aa11baaf2fb58", // TODO: fix key leak
  base: "https://api.openweathermap.org/data/2.5/",
};

const SearchBox = () => {
  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter Repository URL (htt)"
        />
      </div>
    </>
  );
};

export default SearchBox;
