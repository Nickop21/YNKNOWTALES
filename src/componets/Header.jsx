import React from "react";
import { Avatar, Button, Typography } from "@material-tailwind/react";
import logouticon from "../img/logout.png"


function Header() {
  return (
    < >
        <div className="h-[65px] w-full max-w-7xl mx-auto px-6 fixed   bg-white shadow-md z-[99999] flex flex-row items-center justify-between rounded-b-lg inset-x-0 top-0 mx-auto ">
          <div className="flex gap-3 ml-9">
            {/* <img className="h-[20px] w-[20px] " src="" alt="YNKOWTALES" /> */}
            <h6 className="font-extrabold text-lg" >
            YNKOW <span className="text-amber-500 font-extrabold text-xl">Tales</span>
            </h6>
           
          </div>

          <div className="flex gap-3 mr-2">
          <Button color="amber" className=" text-black">
             Logout
            </Button>
            {/* <Avatar src={logouticon} alt="logout" /> */}
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
            />
          </div>
        </div>
    </>
  );
}

export default Header;
