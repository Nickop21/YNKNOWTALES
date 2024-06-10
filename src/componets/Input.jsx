import React, { useId } from "react";
import { Input } from "@material-tailwind/react";

const Inputfun = React.forwardRef(function CustomInput(
  { label = "input", type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className={className}>
      <Input type={type} ref={ref} label={label} {...props} id={id} />
    </div>
  );
});

export default Inputfun;
