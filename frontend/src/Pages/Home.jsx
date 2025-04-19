import React from "react";
import MainBanner from "../Components/MainBanner";
import Categories from "../Components/Categories";
import BestSeller from "../Components/BestSeller";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSeller />
    </div>
  );
};

export default Home;
