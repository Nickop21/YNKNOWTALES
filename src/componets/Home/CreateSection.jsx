import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';


export default function CreateSection() {
  return (
    
          <div className="h-[60px] w-full max-w-2xl mx-auto px-6 absolute  bg-white z-50 flex flex-row items-center justify-between rounded-lg inset-x-0 bottom-[260px] mx-auto ">
        <h6 className="font-extrabold text-lg " >
            Share your stories with us
            </h6>

          <Button color="amber" className=" text-black" onClick={useNavigate("/")}>
            Create post
            </Button>
           
        </div>
    
  )
}
 