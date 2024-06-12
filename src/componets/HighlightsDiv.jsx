import { Typography } from "@material-tailwind/react";
import React from "react";

function HighlightsDiv() {
  return (
    <div className="flex flex-row gap-5 items-center ml-4">
      <img
        className="h-[60px] object-cover object-center rounded-[10px]"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <Typography variant="h6" color="white" className="mb-2">
       cool trending places
      </Typography>
    </div>
  );
}

export default HighlightsDiv;
