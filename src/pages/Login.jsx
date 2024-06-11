import React, { useState } from "react";
import authService from '../appwrite/auth'
import Inputfun from "../componets/Input";
import Container from "../componets/Container";
import { Button } from "@material-tailwind/react";
import yourtalesimg from "../img/yourtalesimg.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import BoxShadow from "../componets/BoxShadow";
import { login as authLogin } from "../store/authSlice";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");

    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
      
    } catch (error) {
      setError(error.message);
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
              <h6 className="text-[#737171] my-4 ">Sign in to your account</h6>

              <form onSubmit={handleSubmit(login)}>
                <Inputfun
                  variant="standard"
                  label={"Email"}
                  type={"text"}
                  className="mt-10"
                  color="yellow"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
                    },
                  })}
                />
                <Inputfun
                  variant="standard"
                  label={"Password"}
                  type={"password"}
                  className="mt-10"
                  color="yellow"
                  {...register("password", {
                    required: true,
                  })}
                />
                
              <Button
                type="submit"
                fullWidth
                className="mt-20 bg-[#333147]  text-yellow-600 hover:text-yellow-800 "
              >
                Log In
              </Button>
              </form>


              <h6 className="text-[#737171] my-4 text-center">
                Not having a account ?{" "}
                <span
                  className="text-yellow-600 hover:text-yellow-800 cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </span>
              </h6>
            </div>
            {/* box shadow */}
            <BoxShadow />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
// https://dribbble.com/shots/20212408-NFT-marketplace
