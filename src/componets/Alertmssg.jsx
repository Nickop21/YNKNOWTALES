import React, { useEffect, useState } from 'react'
import { Alert } from "@material-tailwind/react";

function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  const getAlertClassNames = (color) => {
    return `rounded-none border-l-4 border-[${color}] bg-[${color}]/10 font-medium text-[${color}]`;
  };
function Alertmssg({textMssg ,color ,bgColor,type}) {
    const alertStyle = {
     backgroundColor:bgColor,
  borderColor:color,
  color:color,
  
      };

      const [visible, setVisible] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(false);
        }, 2000);
    
        return () => clearTimeout(timer);
      }, []);
  
  return (
    <Alert
    icon={<Icon />}
    className={`w-1/2 z-10 mt-4 rounded-none border-l-4 font-medium fixed top-0 right-0 py-2 px-4 rounded-md shadow-md notification transform ${visible ? 'translate-x-0' : 'translate-x-full'} `} style={alertStyle}>
   {textMssg}
  </Alert>
  )
}

export default Alertmssg
