import { Typography } from "@material-tailwind/react";
import React from "react";
import Container from "../Container";
import HighlightsDiv from "../HighlightsDiv";
import BoxShadow from "../BoxShadow";

function TrendingBlog() {
  return (
    <Container>
      <div className="mt-[100px]">
        <Typography variant="h2" color="yellow" className="mb-2">
          Highlights
        </Typography>

        <div className="flex flex-row h-[400px]  mt-8 p-5 relative overflow-hidden rounded-[20px]">
          {/* big img */}
          <div className="w-1/2 px-2 h-full">
            <img
              className="h-[100%] w-full object-cover object-center rounded-[30px]"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
          </div>

          {/* small imgs */}

          <div className="flex flex-col gap-5 justify-center w-1/2 px-2 h-full ">
            <HighlightsDiv />
            <HighlightsDiv />
            <HighlightsDiv />
          </div>
          <BoxShadow />
        </div>
      </div>
    </Container>
  );
}

export default TrendingBlog;
