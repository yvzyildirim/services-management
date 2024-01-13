import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { AxisChart } from "../../../Components/Charts/AxisChart";

export const ProductOverview = () => {
  return (
    <div className="bg-white w-full h-[calc(100vh-60px-4rem)] ">
      <div className=" h-[200px] px-6 flex flex-col justify-center border-b">
        <span className="mb-6"> Project total coast</span>
        <div className="w-full flex items-center justify-between  ">
          <div className="text-2xl 2xl:text-3xl font-medium leading-6   my-2">
            $ 142,402,210
            <span className="text-green-600 ml-2  text-sm font-medium rounded-xl">
              14%
            </span>
          </div>
          <button className="text-gray-300 text-xl">
            <FiRefreshCw />
          </button>
        </div>
        <span className="text-xs text-gray-600">Last updated 1 hour ago</span>
        <span className="mt-4 text-lg">
          You can earn
          <span className="text-blue-600 pl-1">$1,921,050</span>
        </span>
      </div>
      <div className="h-[calc(100vh-200px-60px-4rem)] py-4 px-2">
        <AxisChart exportData={false} type="bar" style={{ height: "100%" }} />
      </div>
    </div>
  );
};
