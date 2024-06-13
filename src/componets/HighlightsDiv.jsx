import { Rating, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

function HighlightsDiv({ bgColor, data, onChangeData }) {
  const handleChangeClick = () => {
    onChangeData();
  };
  return (
    <div
      className={`flex flex-row gap-5 items-center ml-4 ${bgColor} rounded-xl px-7 transition-colors duration-1000 ease-in-out `}
      onClick={handleChangeClick}
    >
      <img
        className="h-[60px] w-24 object-cover object-center rounded-[10px]"
        src={data}
        alt="nature image"
      />
      <div>
        <Typography variant="h6" color="white" className="mb-2">
          cool trending places
        </Typography>
        <Rating value={4} />
      </div>
    </div>
  );
}

export default HighlightsDiv;
