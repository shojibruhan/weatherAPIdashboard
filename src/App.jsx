import React from "react";
import Page from "./part_2/Page";
import {
  FavaouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./part_2/Provider";
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
      <LocationProvider>
        <WeatherProvider>
          <FavaouriteProvider>
            <Page />
          </FavaouriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
};

export default App;
