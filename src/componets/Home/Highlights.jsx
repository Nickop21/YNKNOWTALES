import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import Container from "../Container";
import HighlightsDiv from "../HighlightsDiv";
import BoxShadow from "../BoxShadow";
import imgArray from "../../data";

function Highlight() {
  const [imageSrc, setImageSrc] = useState(imgArray[0]);
  const [isFading, setIsFading] = useState(false);
  const [selectedTab ,setSelectedTabs]=useState(0);
  const handleChangeImage = (newImageSrc,index) => {
    
    setIsFading(true);
    setSelectedTabs(index)

    setTimeout(() => {
      setImageSrc(newImageSrc);
      setIsFading(false);
    }, 500); 
  };
  return (
    <Container>
      <div className="mt-[100px]">
        <Typography variant="h2" color="amber" className="mb-2">
          Highlights
        </Typography>

        <div className="flex flex-col md:flex-row h-[400px]  mt-8 p-5 relative overflow-hidden rounded-[20px]">
          {/* big img */}
          <div className="md:w-[55%] px-2 h-full">
            <img
              className={`h-[100%] w-full object-cover object-center rounded-[30px] transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
              src={imageSrc}
              alt="nature image"
            />
          </div>

          {/* small imgs */}
          <div className="h-full  md:w-[20%]">
            <div className="flex md:flex-col md:gap-4  px-2 mt-3 h-full md:h-[90%] overflow-x-scroll md:overflow-y-scroll md:overflow-x-hidden webkitScroll ">
              {imgArray.map((data,index) => (
                <HighlightsDiv bgColor={selectedTab===index ?"bg-[#121316]":"bg-none" } data={data} onChangeData={()=>handleChangeImage(data,index)} />
              ))}
            </div>
          </div>
          <BoxShadow />
        </div>
      </div>
    </Container>
  );
}

export default Highlight;
