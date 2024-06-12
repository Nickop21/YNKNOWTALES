import React from "react";
import Container from "../Container";
import { Button, Typography } from "@material-tailwind/react";
import CreateSection from "./CreateSection";

function HeroSection() {
  return (
    <main className="h-[500px] relatives">
      <section className="h-[100%] flex ">
        <div className="w-[50%] h-[100%] px-2 bg-[#121316] p-[20px]">
          <div className="p-10 pt-[100px]">
            <Typography variant="h6" color="yellow" className="mb-2">
              Newest Blog
            </Typography>
            <Typography variant="h1" color="white" className="mb-2">
              The art of Home Transform
            </Typography>
            <p className="mb-2 text-[grey]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              aliquid est, facere vel veniam nostrum eum qui possimus sapiente
              vero deleniti nulla, quibusdam voluptate inventore at iusto
              magnam! Veritatis, eveniet.
            </p>
            <Button color="amber" className="mt-5 ">
              Read more
            </Button>
          </div>
        </div>

        {/* left section */}
        <div className="w-[50%] px-2 h-[100%] ">
          <img
            className="h-[100%] w-full object-cover object-center rounded-lg"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
        </div>
      </section>
      <CreateSection/>
    </main>
  );
}

export default HeroSection;
