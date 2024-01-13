import React from "react";
import { AiTwotoneLike } from "react-icons/ai";

const bestPractices = [
  {
    text: "Change your the memory size of Lambda function to 512MB",
  },
  {
    text: "Change your the memory size of Lambda function to 512MB",
  },
  {
    text: "Change your the memory size of Lambda function to 512MB",
  },
  {
    text: "Change your the memory size of Lambda function to 512MB",
  },
  {
    text: "Change your the memory size of Lambda function to 512MB",
  },
];

export const ProductBestPractices = (data) => {
  return (
    <div className="preview bg-white w-full h-[calc(100vh-60px-4rem)] overflow-auto p-4 rounded-tl-3xl">
      {bestPractices.map((i, k) => (
        <div
          key={k + 1}
          className=" px-2 alert bg-yellow-50 py-3 mb-3 flex items-center zoom-in border intro-x "
        >
          <div className="ml-4 mr-auto">
            <div className="font-medium text+sm">{i.text}</div>
            <div className="text-slate-500 text-xs mt-0.5">28 April 2021</div>
          </div>
          <button className="btn border-none bg-yellow-500/20 shadow-none text-green-700 hover:text-white hover:bg-green-700 py-2 px-3 rounded-full ">
            <AiTwotoneLike className="mr-2" />
            Apply
          </button>
          <button className="ml-4 btn border-none bg-yellow-500/20 shadow-none text-red-700 hover:text-white hover:bg-red-700 py-2 px-3 rounded-full ">
            Dissmiss
          </button>
        </div>
      ))}
    </div>
  );
};
