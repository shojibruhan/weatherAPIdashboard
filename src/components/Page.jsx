import React from "react";
import { FavouriteProvider, WeatherProvider } from "../provider";
import Header from "./header/Header";
import WeaterhBoard from "./weather/WeaterhBoard";

const Page = () => {
  return (
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
  );
};

export default Page;
