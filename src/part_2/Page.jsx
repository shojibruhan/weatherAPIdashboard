import React, { useContext } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

const Page = () => {
  const { loading } = useContext(WeatherContext);
  return (
    <>
      {loading.state ? (
        <p>{loading.message}</p>
      ) : (
        <div className="grid h-screen place-items-center">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
