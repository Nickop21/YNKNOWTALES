import React, { useState } from "react";
import authService from '../appwrite/auth'
import Inputfun from "../componets/Input";
import Container from "../componets/Container";
import { Button } from "@material-tailwind/react";
import yourtalesimg from "../img/yourtalesimg.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import BoxShadow from "../componets/BoxShadow";
import { login } from "../store/authSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const createAccount = async (data) => {
    setError("");
    try {
      const userData=await authService.createAccount(data)
      if (userData) {
        const currentuserData = await authService.getCurrentUser()
        // if(currentuserData) dispatch(login(currentuserData));
        navigate("/login")
    }
      
    } catch (error) {
      setError(error)
    }

  };
  return (
    <div className="h-[100vh] bg-[#26252c]  flex justify-center">
      <Container>
        <div className="w-[100%] flex h-[100%] py-[100px] ">
          {/* login img sec */}
          <div className="w-[50%]  flex justify-center">
            <img src={yourtalesimg} alt="" />
          </div>
          {/* <login inputs */}

          <div className="w-[50%] relative bg-[#121316] flex items-center justify-center flex-col rounded-2xl overflow-hidden">
            <div className="w-[80%] text-left ">
              <h1 className="text-[#ded9d9] font-medium text-2xl">
                Welcome to <span className="text-yellow-600">YNKNOWTALES</span>
              </h1>
              <h6 className="text-[#737171] my-4 ">Create your account</h6>

              {/* form */}

              <form onSubmit={handleSubmit(createAccount)}>
                
                  <Inputfun
                    variant="standard"
                    label={"Fullname"}
                    type={"text"}
                    color="yellow"
                    {...register("name", {
                      required: true,})}
                
                  />
                  <Inputfun
                    variant="standard"
                    label={"Email"}
                    type={"text"}
                    className="mt-10"
                    color="yellow"
                    {...register("email", {
                      required: true,
                      validate: {
                          matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                          "Email address must be a valid address",
                      }
                  })}
                  />
                  <Inputfun
                    variant="standard"
                    label={"Password"}
                    type={"password"}
                    className="mt-10"
                    color="yellow"
                    {...register("password", {
                      required: true,})}
                
                  />
                

                <Button
                  type="submit"
                  fullWidth
                  className="mt-20 bg-[#333147]  text-yellow-600 hover:text-yellow-800 "
                >
                  create an account
                </Button>
              </form>

              <h6 className="text-[#737171] my-4 text-center">
                Already have a account ?{" "}
                <span
                  className="text-yellow-600 hover:text-yellow-800 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </h6>
            </div>

            {/* box shadow */}
            <BoxShadow/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
// https://dribbble.com/shots/20212408-NFT-marketplace
