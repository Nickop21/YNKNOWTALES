import React from "react";

import Inputfun from "../componets/Input";
import Container from "../componets/Container";
import { Button } from "@material-tailwind/react";
import yourtalesimg from "../img/yourtalesimg.png";

function Login() {
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

              <div>
                <Inputfun
                  variant="standard"
                  label={"Fullname"}
                  type={"text"}
                  color="yellow"
                />
                <Inputfun
                  variant="standard"
                  label={"Email"}
                  type={"text"}
                  className="mt-10"
                  color="yellow"
                />
                <Inputfun
                  variant="standard"
                  label={"Password"}
                  type={"password"}
                  className="mt-10"
                  color="yellow"
                />
              </div>

              <Button
                fullWidth
                className="mt-20 bg-[#333147]  text-yellow-600 hover:text-yellow-800 "
              >
                create an account
              </Button>
              <h6 className="text-[#737171] my-4 text-center">
                Already have a account ?{" "}
                <span className="text-yellow-600 hover:text-yellow-800 cursor-pointer">
                  Sign in
                </span>
              </h6>
            </div>
            {/* box shadow */}
            <div
              className="absolute bg-[#ffff0000] w-40 h-40 rounded-full -bottom-[90px] -right-[155px] "
              style={{ boxShadow: "0 35px 140px -2px yellow" }}
            ></div>
            <div
              className="absolute bg-[#ffff0000] w-40 h-40 rounded-full -bottom-[90px] -right-[155px] "
              style={{ boxShadow: "0 35px 140px -2px yellow" }}
            ></div>

            <div
              className="absolute bg-[#ffff0000] w-40 h-40 rounded-full -top-[90px] -left-[155px] "
              style={{ boxShadow: "0 35px 170px -7px yellow" }}
            ></div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
// https://dribbble.com/shots/20212408-NFT-marketplace
