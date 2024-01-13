import React from "react";
import lambdaIcon from "../../../Assets/images/aws-lambda.svg";
import s3Icon from "../../../Assets/images/Amazon-S3-Logo.svg";
import { InfoBoard } from "../../InfoBoard";
import { MdAdd, MdError } from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";

export const ProjectOverview = ({ data, activeProject }) => {
  const projectComponents = data.find(
    (x) => x.projectId === activeProject
  )?.components;
  const lambdaComponents = projectComponents?.filter(
    (x) => x.type === "lambda"
  );
  return (
    <>
      <div className="w-full h-full bg-white  py-3 border-b  w-full  flex flex-col justify-start items-center rounded-tl-[40px] rounded-tr-[40px]">
        <div className=" w-full flex flex-col justify-start items-center pt-4">
          <span className="py-2">Project have</span>
          <div
            className={
              "w-20 h-20 rounded-full flex justify-center items-center text-4xl text-white " +
              (!projectComponents?.length ? "bg-gray-300" : "bg-primary")
            }
          >
            <span>
              {projectComponents?.length > 0 ? (
                projectComponents?.length
              ) : (
                <AiOutlineStop />
              )}
            </span>
          </div>
          <h2 className="pt-2 pb-6 text-center font-semibold text-lg w-full">
            {projectComponents?.length > 0 ? "Components" : "Not Componenets"}
          </h2>
        </div>
        {projectComponents?.length > 0 ? (
          <div className=" flex justify-between items-center w-full px-2 py-4 border-t">
            <div className="flex justify-start items-center ">
              <img className="w-6 h-6" src={lambdaIcon} alt="lambda" />
              <span className="ml-2 ">Lamba functions</span>
            </div>
            <span className="text-md px-2 font-bold text-primary">
              {lambdaComponents?.length}
            </span>
          </div>
        ) : (
          <div className="p-2 text-center">
            Get started by add a new component.{" "}
          </div>
        )}
        <div className="w-full py-4 flex justify-center items-center border-t">
          <button className="btn btn-outline-primary">
            <MdAdd className="text-xl mr-2" />
            Add Componenets
          </button>
        </div>
      </div>
    </>
  );
};
