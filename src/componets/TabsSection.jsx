import React, { useState } from "react";
const tabHeaderData = [
    "All",
  "Lifestyle",
  "Travel",
  "Hobbies",
  "others"
];


function TabsSection() {


    const [selectedTab ,setSelectedTabs]=useState(0);
    const [left,setLeft]=useState(0);
    const activeTab=(tab,index)=>{
    setLeft(index * 150);
    setTimeout(() => {
        setSelectedTabs(index)
    }, 300);
    // onTabChange(tab,index);
    }
    return (
    <div className="w-full h-[60px] border-b-2 bg-[#121316] rounded-2xl mb-7 flex items-center justify-center ">

    <div className="w-full h-[40px] relative   overflow-x-auto  whitespace-nowrap mx-4 flex items-center ">
      {tabHeaderData.map((data,index) => (
        <span key={index} className={`w-[150px] h-full flex items-center  text-white font-semibold   rounded-lg text-center justify-center colorTransition z-10 cursor-pointer tabTransition ${selectedTab===index ?"bg-amber-500" : ""} `} onClick={()=> activeTab(data,index)} >
          {data}
        </span>
      ))}
      <div className={`absolute h-[40px] w-[150px]  bg-amber-500   rounded-xl top-0 tabTransition hidden md:block ` } style={{left:left}}></div>

    </div>
    </div>
  );
}

export default TabsSection;
