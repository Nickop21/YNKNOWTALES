import React from "react";

function BoxShadow() {
  return (
    <div>
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
  );
}

export default BoxShadow;
