import React from "react";
import HeroSection from "../componets/Home/HeroSection";
import PopularBlogs from "../componets/Home/PopularBlogs";

import Highlight from "../componets/Home/Highlights";


function Home() {
  return (
    <div>
      <HeroSection />
      <Highlight />
      <PopularBlogs />
    </div>
  );
}

export default Home;
