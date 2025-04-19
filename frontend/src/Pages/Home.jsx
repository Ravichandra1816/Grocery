import React from "react";
import MainBanner from "../Components/MainBanner";
import Categories from "../Components/Categories";
import BestSeller from "../Components/BestSeller";
import BottomBanner from "../Components/BottomBanner";
import NewsLatter from "../Components/NewsLatter";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <NewsLatter />
    </div>
  );
};

export default Home;
