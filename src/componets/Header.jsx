import React, { useState } from "react";
import { Avatar, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import authservice from "../appwrite/auth";
import Loader from "./Loader";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  function logouthandler() {
    authservice.deleteSession();
    setloading(true);
    setTimeout(() => {
      dispatch(logout());
      setloading(false);
    }, 500);
  }
  return (
    <>

      <div className="h-[65px] w-full max-w-7xl mx-auto px-6 fixed   bg-white shadow-md z-[99999] flex flex-row items-center justify-between rounded-b-lg inset-x-0 top-0 mx-auto ">
        <div
          className="flex gap-3 ml-9 cursor-pointer"
          onClick={() => navigate("/")}
        >
          {/* <img className="h-[20px] w-[20px] " src="" alt="YNKOWTALES" /> */}
          <h6 className="font-extrabold text-lg">
            YNKOW{" "}
            <span className="text-amber-500 font-extrabold text-xl">Tales</span>
          </h6>
        </div>

        <div className="flex gap-3 mr-2">
          <Button
            color="amber"
            className=" text-black"
            onClick={() => logouthandler()}
          >
            Logout
          </Button>

          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
          />
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
}

export default Header;
