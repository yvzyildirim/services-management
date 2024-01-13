import React, { useContext, useState } from "react";
import awsLogo from "../../../../Assets/images/aws-logo.png";
import { ModalStep, WorkSpaceName } from "./WorkSpaceCreate";
import { API_URL } from "../../../../Api/ApiUrls";
import { Authorization } from "../../../../Layouts/PrivateLayout";
import { LoadingContex } from "../../../../Routes/PlatformRoutes";

export const AwsForm = () => {
  const { page, setPage } = useContext(ModalStep);
  const { load, setLoad } = useContext(LoadingContex);
  const auth = useContext(Authorization);
  const name = useContext(WorkSpaceName);
  const access = auth?.access;
  const [error, setError] = useState();
  const region = "eu-west-1";

  function handleSubmit(e) {
    e.preventDefault();

    const accessKey = document.getElementById("accessKey").value;
    const secretKey = document.getElementById("secretKey").value;

    setPage("done");
  }

  return (
    <div className="h-full">
      <div className="intro-y bg-white rounded-br-[150px] rounded-bl-[150px] py-10 h-full ">
        <div className="flex flex-col items-center">
          <div className="h-12 mb-4">
            <img className="h-full" src={awsLogo} alt="logo" />
          </div>
          <div className="font-semibold text-center text-xl">
            Connect to AWS
          </div>
          {error && (
            <span className="text-danger animate-bounce mt-4	">{error}</span>
          )}
        </div>
        <div className="px-5 sm:px-20 mt-10  ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center mt-5"
          >
            <div className="w-4/12">
              <label htmlFor="regular-form-2" className="form-label">
                AWS Access Key ID :
              </label>
              <input
                id="accessKey"
                type="text"
                className="form-control form-control-md"
                placeholder="Enter"
              />
            </div>
            <div className="w-4/12 mt-8">
              <label htmlFor="regular-form-2" className="form-label">
                Secret Key:
              </label>
              <input
                id="secretKey"
                type="text"
                className="form-control form-control-md"
                placeholder="Enter"
              />
            </div>
            <div className="grid grid-cols-2 gap-4  w-4/12 mt-8 ">
              <div
                onClick={() => setPage("first")}
                className="btn btn-secondary  w-full "
              >
                Previous
              </div>
              <button className="btn btn-primary ">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
