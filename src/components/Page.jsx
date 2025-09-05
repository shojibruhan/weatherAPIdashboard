import React from "react";
import { WeatherProvider } from "../provider";
import Header from "./header/Header";
import WeaterhBoard from "./weather/WeaterhBoard";

const Page = () => {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WeaterhBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
};

export default Page;
