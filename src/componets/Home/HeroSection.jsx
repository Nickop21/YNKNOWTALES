import React from "react";
import Container from "../Container";
import { Button, Carousel, Typography } from "@material-tailwind/react";
import CreateSection from "./CreateSection";
import HeroCrousalContent from "./HeroCrousalContent";


function HeroSection() {
  return (
    <main className="h-[500px] relative">
      <section className="h-[100%] flex ">
        <div className="w-[50%] h-[100%] px-2 bg-[#121316] p-[20px]">
          <div className="p-10 pt-[100px]">
            <Typography variant="h6" color="yellow" className="mb-2">
              Welcome Narrator
            </Typography>
            <Typography variant="h2" color="white" className="mb-2">
              Empower Others by Sharing Your Story
            </Typography>
            <p className="mb-2 text-[grey]">
              Your story is a treasure trove waiting to inspire, enlighten, and
              connect with others. Share it boldly, for in your experiences lie
              the seeds of growth and the power to uplift countless souls
            </p>
            {/* <Button color="amber" className="mt-5 ">
          Read more
        </Button> */}
          </div>
        </div>

        {/* left section */}
        <div className="w-[50%] px-2 h-[100%] ">
          <HeroCrousalContent/>
        </div>
      </section>

      <CreateSection />
    </main>
  );
}

export default HeroSection;
