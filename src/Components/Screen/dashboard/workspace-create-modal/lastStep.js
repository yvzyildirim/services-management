import React, {useContext} from "react";
import {WorkSpaceName} from "./WorkSpaceCreate";
import {MdOutlineDone} from 'react-icons/md'
import {Link} from "react-router-dom";
import {Loading} from "../../../../Layouts/PrivateLayout";


export const LastStep = () => {
  const {loading,setLoading} = useContext(Loading)
  const name = useContext(WorkSpaceName)

  return (
    <div className="h-full">
      <div className="intro-y bg-white rounded-br-[150px] rounded-bl-[150px] py-10 h-full ">
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 flex justify-center items-center shadow-lg bg-white mb-4 rounded-full border-4 ">
            <MdOutlineDone className="text-primary text-5xl"/>
          </div>
          <div className="font-medium mt-3 text-center text-3xl text-primary">
            SUCCESS
          </div>
        </div>
        <div className="px-5 sm:px-20 mt-10  ">
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="  flex justify-between text-center">
              <span>
                {"The workspace named " + name +" has been successfully created."}
              </span>
            </div>
            <Link
              to="/"
              onClick={()=> setLoading(true)}
              className="btn btn-primary mt-8"
            >
              Finish
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}