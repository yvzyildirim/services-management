import React, { useContext, useEffect, useState } from "react";
import lambdaIcon from "../../../Assets/images/aws-lambda.svg";
import { CgCornerDownRight } from "react-icons/cg";
import { API_URL } from "../../../Api/ApiUrls";
import { Authorization } from "../../../Layouts/PrivateLayout";
import { LoadingContex } from "../../../Routes/PlatformRoutes";
import { CreateProjectSlideOver } from "../../../Pages/Projects/Projects";
import awsLogo from "../../../Assets/images/aws-logo-white.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SearchBar } from "../../Forms/SearchBar";
import { SelectBox } from "../../Forms/SelectBox";
import { MdDashboardCustomize } from "react-icons/md";
import { BsFilterRight } from "react-icons/bs";

const sortOptions = [
  { id: "1", value: "Lambda" },
  { id: "2", value: "S3" },
  { id: "3", value: "Database" },
];

export const CreateProjectModal = ({ lambdaList }) => {
  const { load, setLoad } = useContext(LoadingContex);
  const [selectedFunction, setSelectedFunction] = useState([]);
  const [functions, setFunctions] = useState([]);
  const auth = useContext(Authorization);
  const access = auth.access;
  const { show, setShow } = useContext(CreateProjectSlideOver);
  const [error, setError] = useState();

  function handleAdd(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    console.log(id);
    setSelectedFunction([...selectedFunction, id]);
  }

  function handleRemove(e) {
    const id = e.target.dataset.id;

    setSelectedFunction(selectedFunction.filter((item) => item !== id));
  }

  useEffect(() => {
    setFunctions(
      selectedFunction.map((i) => {
        const item = lambdaList.functions.find((x) => x.identification === i);
        return {
          name: item?.name,
          identification: item?.identification,
          cloudType: item?.cloudType,
          type: item?.type,
        };
      })
    );
  }, [selectedFunction]);

  function handleSubmit() {
    const projectName = document.getElementById("name").value;
    setLoad(true);

    if (projectName.length > 0) {
    } else {
      setError("is require");
      setLoad(false);
    }
  }

  console.log(lambdaList);
  return (
    <div className="w-full flex justify-between items-stretch">
      <div className="w-6/12 bg-primary  ">
        <div className="bg-white h-full h-[calc(100vh-4rem)] rounded-tr-[30px] overflow-auto ">
          <div className=" border-b h-[60px] border-b bg-gray-800  flex justify-between items-center flex justify-center px-4">
            <div className="flex justify-start items-center">
              <img className="h-8" src={awsLogo} alt="aws" />
              <div className="flex justify-center items-stretch bg-primary text-white rounded-md overflow-hidden ml-6">
                <span className="bg-blue-800 px-2 py-1">
                  {lambdaList.functions?.length}
                </span>
                <span className="px-2 py-1 text-gray-300">component</span>
              </div>
            </div>

            <div className=" flex justify-end items-center">
              <span className="text-gray-400 pr-2">
                select component for add new project
              </span>
              <AiOutlineArrowRight className=" m-0 text-white text-2xl text-gray-500" />
            </div>
          </div>
          <form className="w-full  ">
            <div className="h-16 w-full flex justify-between items-center px-2 border-b">
              <SearchBar className="w-9/12 mr-4" placeholder="Search items" />
              <SelectBox
                className=""
                label={
                  <span className="flex justify-start items-center w-full">
                    <BsFilterRight className="pr-2 text-2xl" />
                    Filter
                  </span>
                }
                values={sortOptions}
              />
            </div>
            <div className="w-full px-4">
              <div className="flex items-center  py-4 ">
                <img className="w-6 h-6" src={lambdaIcon} alt="lambda-icon " />
                <h2 className="font-semibold pl-2 ">Lambda Functions</h2>
              </div>
              <div className="flex flex-col w-full  ">
                {lambdaList?.functions?.map((i, k) => (
                  <div
                    key={k + i.identification}
                    className={
                      "flex justify-between items-center w-full border mb-1 py-2 hover:shadow-xl cursor-pointer rounded-md  " +
                      (selectedFunction.find((x) => x === i.identification) &&
                        "hidden")
                    }
                  >
                    <div className="flex  items-center">
                      <div className="w-10 h-6 flex justify-center items-center">
                        <CgCornerDownRight />
                      </div>
                      <div className="flex flex-col ">
                        <span className="font-medium text-lg"> {i.name} </span>
                        <div className="flex items-center pt-1">
                          <span className="pr-4 border-r">
                            Code Size : {i.codeSize}
                          </span>
                          <span className="pl-4">Runtime : {i.runtime}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      id={i.identification}
                      onClick={handleAdd}
                      data-id={i.identification}
                      className="text-green-700 mr-2"
                    >
                      add project
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-6/12 bg-primary  px-6  h-[calc(100vh-4rem)]">
        <div className="h-[60px] text-lg text-white flex items-center">
          Project Name
          {error && (
            <span className="animate-bounce ml-1 block font-semibold text-yellow-400 mt-1">
              {error}
            </span>
          )}
        </div>
        <div
          className={
            "w-12/12 h-16 flex justify-between items-center border-b border-slate-500  " +
            (error && " border-yellow-400 border-dashed")
          }
        >
          <input
            id="name"
            type="text"
            className="bg-transparent  p-0 text-3xl font-light text-white border-none  focus:ring-0"
            placeholder="Enter project name"
          />
          <div className="flex justify-center items-stretch bg-blue-100 text-white rounded-md overflow-hidden ">
            <span className="bg-green-600 font-bold text-white px-2 py-1">
              {selectedFunction.length}
            </span>
            <span className="px-2 py-1 text-gray-600">component</span>
          </div>
        </div>

        <div className="w-full h-[calc(100vh-4rem-210px)]  overflow-auto">
          {selectedFunction.length > 0 ? (
            <>
              <div className="flex items-center  py-4 ">
                <img className="w-6 h-6" src={lambdaIcon} alt="lambda-icon " />
                <h2 className="font-semibold pl-2 text-white ">
                  Lambda Functions
                </h2>
              </div>
              {selectedFunction?.map((i, k) => (
                <div
                  key={k + 1}
                  className="flex justify-between items-center w-full border-b py-2 bg-white px-2 hover:shadow-xl cursor-pointer mb-1 rounded-md"
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6  flex justify-center items-center">
                      <CgCornerDownRight />
                    </div>
                    <div className="flex flex-col pl-4">
                      <span className="font-medium text-lg">
                        {
                          lambdaList?.functions.find(
                            (x) => x.identification === i
                          ).name
                        }
                      </span>
                      <div className="flex items-center pt-1">
                        <span className="pr-4 border-r">
                          Code Size :{" "}
                          {
                            lambdaList?.functions.find(
                              (x) => x.identification === i
                            ).codeSize
                          }
                        </span>
                        <span className="pl-4">
                          Runtime :{" "}
                          {
                            lambdaList?.functions.find(
                              (x) => x.identification === i
                            ).runtime
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    data-id={
                      lambdaList?.functions.find((x) => x.identification === i)
                        .identification
                    }
                    onClick={handleRemove}
                    className="text-red-600 font-bold mr-2"
                  >
                    remove
                  </button>
                </div>
              ))}
            </>
          ) : (
            <div className="h-full flex flex-col justify-center items-center">
              <div className="bg-white rounded-full h-24 w-24 flex justify-center items-center">
                <MdDashboardCustomize className="text-6xl text-primary" />
              </div>
              <h3 className="text-white text-xl font-semibold py-4">
                Add component
              </h3>
              <ul className="text-white leading-6">
                <li>
                  1. Soldaki listedeki componentleri tıklayarak buraya aktarın
                </li>
                <li>2. Create project tuşuna basarak projenizi oluşturun</li>
              </ul>
            </div>
          )}
        </div>
        <div className="h-16 p-3 w-full flex items-center ">
          <button
            onClick={handleSubmit}
            className="btn btn-lg text-primary bg-white hover:bg-transparent hover:text-white w-full"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};
