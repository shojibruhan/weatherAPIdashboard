import React from "react";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "../provider";
import Header from "./header/Header";
import WeaterhBoard from "./weather/WeaterhBoard";

const Page = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <section>
                <WeaterhBoard />
              </section>
            </main>
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};

export default Page;
