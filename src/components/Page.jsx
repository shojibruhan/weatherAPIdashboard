import React from "react";
import Header from "./header/Header";
import WeaterhBoard from "./weather/WeaterhBoard";

const Page = () => {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeaterhBoard />
        </section>
      </main>
    </div>
  );
};

export default Page;
