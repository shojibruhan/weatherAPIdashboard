import React from "react";
import Page from "./part_2/Page";
// import {LocationProvider } from './provider/LocationProvider';
// import {
//   FavouriteProvider,
//   LocationProvider,
//   WeatherProvider,
// } from "./provider";

// import Page from "./components/Page";
const App = () => {
  return (
    <>
      {/* <LocationProvider>
        <WeatherProvider>
          <FavouriteProvider>
            <Page />
          </FavouriteProvider>
        </WeatherProvider>
      </LocationProvider> */}
      <Page />
    </>
  );
};

export default App;
