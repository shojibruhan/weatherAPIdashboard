import React from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

const Page = () => {
  return (
    <div className="grid h-screen place-items-center">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
};

export default Page;
