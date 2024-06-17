import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import appwriteService from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function SimilarPostCard({ featureImage }) {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false)
  return (
    <div className="relative  h-[200px] w-[300px] flex-col  rounded-xl bg-white text-center ">
      <div
        className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
        style={{
          backgroundImage: `url(${appwriteService.getfilePreview(
            featureImage
          )})`,
        }}
      >
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative p-6 px-6 py-14 md:px-12">
        <Button
          color="amber"
          className=" text-black  animate-bounce focus:animate-none hover:animate-none"
          onClick={() => {
            setloading(true)
            setTimeout(() => {
                setloading(false)
              navigate(`/blog/${featureImage}`);
            }, 300);
          }}
        >
          <span>Read</span>
        </Button>
      </div>
      {loading&&<Loader/>}
    </div>
  );
}

export default SimilarPostCard;
