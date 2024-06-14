import { Rating, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";


function HighlightsDiv({ bgColor, data, onChangeData }) {
  const [imgurl,setImgurl]=useState("");
  useEffect(() => {
    setImgurl(appwriteService.getfilePreview(data.featureImage))    
  }, [data])
  
  const handleChangeClick = () => {
    onChangeData();
  };
  return (
    <div
      className={`h-[100px] md:h-auto w-[300px] md:w-full flex flex-col md:flex-row gap-5 items-center md:ml-4 ${bgColor} rounded-md px-3 py-3 transition-colors duration-1000 ease-in-out `}
      onClick={handleChangeClick}
    >
    
      <img
        className="h-[30px] md:h-[60px]  w-24 object-cover object-center rounded-[10px]"
        src={imgurl}
        alt="nature image"
      />
      <div>
        <Typography variant="h6" color="white" className="text-sm">
          lifestye
        </Typography>
        {/* <Rating value={4} /> */}
      </div>
    </div>
  );
}

export default HighlightsDiv;
