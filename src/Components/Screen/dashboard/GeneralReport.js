import React from "react";
import {IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import {BiGitPullRequest } from 'react-icons/bi'
import {GiMoneyStack } from 'react-icons/gi'

export const Box = ({icon, count, title}) =>{
  return(
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y z-10">
      <div className="report-box zoom-in">
        <div className="box p-5">
          <div className="flex">
            <span className="text-2xl">{icon}</span>
            <div className="ml-auto">
              <div className="report-box__indicator bg-success tooltip cursor-pointer">
                33%
               <IoIosArrowUp />
              </div>
            </div>
          </div>
          <div className="text-3xl font-medium leading-8 mt-6">
            {count}
          </div>
          <div className="text-base text-slate-500 mt-1">
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export const GeneralReport = ( ) =>{
  return(
    <div className="grid grid-cols-12 gap-6 mt-5">
      <Box
        icon={<BiGitPullRequest/>}
        title="Total Request"
        count="2350"
      />
      <Box
        icon={<GiMoneyStack />}
        title="Total Cost"
        count="2350"
      />
      <Box
        icon={<IoIosArrowUp/>}
        title="Total Request"
        count="2350"
      />
      <Box
        icon={<IoIosArrowUp/>}
        title="Total Request"
        count="2350"
      />
    </div>
  )
}