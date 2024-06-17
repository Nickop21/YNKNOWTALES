import React from "react";
import Container from "../Container";
import { Button, Carousel, Typography } from "@material-tailwind/react";
import CreateSection from "./CreateSection";
import HeroCrousalContent from "./HeroCrousalContent";
import Typewriter from "../TypwriterEfefct";

function HeroSection() {
  const words = [
    "Empower Others by Sharing Your Story",
"Uplift through your journey of resilience",
"Illuminate others with your inspiring story",
"Share the journey that shaped who you are",
"Offer hope through your personal narrative",
"Show the power of perseverance in your story",
  ];

  return (
    <main className="md:h-[500px]  relative">
      <section className=" md:h-[100%] flex flex-col md:flex-row ">
        <div className="w-full md:w-[50%] h-[300px] md:h-[100%] px-2 bg-[#121316] p-[20px]">
          <div className="p-10 pt-[100px]">
            <Typography variant="h6" color="amber" className="mb-2">
              Welcome Narrator
            </Typography>
            <Typography variant="h3" color="white" className="mb-2 ">
              <Typewriter words={words} speed={40} />
            </Typography>
            <p className="mb-2 text-[grey] hidden md:block">
              Your story is a treasure trove waiting to inspire, enlighten, and
              connect with others. Share it boldly, for in your experiences lie
              the seeds of growth and the power to uplift countless souls
            </p>
          </div>
        </div>

        {/* left section */}
        <div className="w-full md:w-[50%] px-2 h-[300px] md:h-[100%] ">
          <HeroCrousalContent />
        </div>
      </section>

      <CreateSection />
    </main>
  );
}

export default HeroSection;
