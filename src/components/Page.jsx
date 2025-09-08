import React, { useContext } from "react";

import { WeatherContext } from "../context";
import Header from "./header/Header";
import WeaterhBoard from "./weather/WeaterhBoard";

const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  return (
    <>
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeaterhBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
