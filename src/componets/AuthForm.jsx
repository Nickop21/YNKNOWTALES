import React, { useState } from "react";
import authService from "../appwrite/auth";
import Inputfun from "./Input";
import Container from "./Container";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import BoxShadow from "./BoxShadow";
import { useDispatch } from "react-redux";
import Loader from "./Loader";
import Alertmssg from "./Alertmssg";
import yourtalesimg from "../img/yourtalesimg.png";
import { login as authLogin } from "../store/authSlice";

function AuthForm({ isSignup }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMssg, setSucessMssg] = useState(false);

  const onSubmit = async (data) => {
    setError("");
    setLoading(true);

    try {
      if (isSignup) {
        const userData = await authService.createAccount(data);
        if (userData) {
          //   const currentUserData = await authService.getCurrentUser();
          setSucessMssg(true);
          setTimeout(() => {
            navigate("/login");

            setSucessMssg(false);
          }, 2000);
        }
      }
      //   login
      else {
        const session = await authService.login(data);
        if (session) {
          const userData = await authService.getCurrentUser();
          if (userData) dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh]  flex justify-center items-center">
      <Container>
        <div className="w-[100%] h-[600px]  flex justify-center ">
          <div className="w-[50%] justify-center hidden md:flex">
            <img src={yourtalesimg} alt="" />
          </div>
          <div className="relative w-full md:w-[50%] relative bg-[#121316] shadow-amber-300 shadow-sm  flex items-center justify-center flex-col rounded-2xl z-10 overflow-hidden">
            <div className=" relative w-[80%] text-left  ">
              <h1 className="text-[#ded9d9] font-medium text-2xl">
                {isSignup ? "Welcome to" : "Welcome back to"}{" "}
                <span className="text-yellow-600">YNKNOWTALES</span>
              </h1>
              <h6 className="text-[#737171] my-4">
                {isSignup ? "Create your account" : "Login to your account"}
              </h6>
              <form onSubmit={handleSubmit(onSubmit)}>
                {isSignup && (
                  <Inputfun
                    variant="standard"
                    label={"Fullname"}
                    type={"text"}
                    color="yellow"
                    {...register("name", { required: true })}
                  />
                )}
                <Inputfun
                  variant="standard"
                  label={"Email"}
                  type={"text"}
                  className="mt-10"
                  color="yellow"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPattern: (value) =>
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
                  {...register("password", { required: true })}
                />
                <Button
                  type="submit"
                  fullWidth
                  className="mt-20 bg-[#333147] text-yellow-600 hover:text-yellow-800"
                >
                  {isSignup ? "Create an account" : "Login"}
                </Button>
              </form>

              {error && (
                <Alertmssg
                  textMssg={error}
                  color="#f73939"
                  bgColor="#a3404061"
                  type="error"
                />
              )}
              {successMssg && (
                <Alertmssg
                  textMssg={"Account Created succesfully"}
                  color="white"
                  bgColor="#22DD22"
                  type="success"
                />
              )}

              <h6 className="text-[#737171] my-4 text-center">
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <span
                      className="text-yellow-600 hover:text-yellow-800 cursor-pointer"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </span>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <span
                      className="text-yellow-600 hover:text-yellow-800 cursor-pointer"
                      onClick={() => navigate("/signup")}
                    >
                      Sign Up
                    </span>
                  </>
                )}
              </h6>
            </div>
            <BoxShadow />
          </div>
        </div>
        {loading && <Loader />}
      </Container>
    </div>
  );
}

export default AuthForm;
