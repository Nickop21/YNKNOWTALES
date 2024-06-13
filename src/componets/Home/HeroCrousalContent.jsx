import React from 'react'
import { Button, Carousel, Typography } from "@material-tailwind/react";
 import imgArray from "../../data"

function HeroCrousalContent() {
  return (

    <Carousel
    loop={true}
    autoplay={true}
    transition={{ duration: 1 }}
    className="rounded-xl"
  >
    {imgArray.map((imgData,index) => (
      // console.log(imgData)
      <img
      key={index}
        className="h-[100%] w-full object-cover object-center rounded-lg"
        src={imgData}
        alt={`nature image ${index}`}
      />
    ))}
  </Carousel>
  )
}

export default HeroCrousalContent
