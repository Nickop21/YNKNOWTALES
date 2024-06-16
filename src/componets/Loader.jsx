import React from "react";

const Loader = () => {
  return (
    
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <svg
        class="pl"
        viewBox="0 0 200 200"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
            <stop offset="0%" stop-color="yellow" />
            <stop offset="100%" stop-color="" />
          </linearGradient>
          <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="yellow" />
            <stop offset="100%" stop-color="" />
          </linearGradient>
        </defs>
        <circle
          class="pl__ring"
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke="url(#pl-grad1)"
          stroke-width="36"
          stroke-dasharray="0 257 1 257"
          stroke-dashoffset="0.01"
          stroke-linecap="round"
          transform="rotate(-90,100,100)"
        />
        <line
          class="pl__ball"
          stroke="url(#pl-grad2)"
          x1="100"
          y1="18"
          x2="100.01"
          y2="182"
          stroke-width="36"
          stroke-dasharray="1 165"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default Loader;
