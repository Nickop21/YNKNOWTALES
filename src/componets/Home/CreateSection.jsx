import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import CreateBlog from "../../pages/CreateBlog";

export default function CreateSection() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const navigate=useNavigate()
  return (
    <div className="h-[60px] w-full max-w-2xl mx-auto px-6 absolute  bg-white z-50 flex flex-row items-center justify-between rounded-lg inset-x-0 -bottom-[20px] mx-auto ">
      <h6 className="font-extrabold text-lg ">Share <span className="text-amber-600">your stories</span> with us</h6>

      <Button color="amber" className=" text-black" onClick={()=>navigate("/create-yours-blog")}>
        Create post
      </Button>
     
      {/* dialoge */}

      {/* <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="flex items-center justify-between text-amber-600 border-b-2">Share your stories
        
        <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogHeader>
        <DialogBody size="xl" className="h-[42rem] overflow-scroll webkitScroll">
          <CreateBlog handleOpen={(checkopen)=> handleOpen(checkopen)} />
        </DialogBody>

      </Dialog> */}
    </div>
  );
}
