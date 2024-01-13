import React, {useContext, useState} from "react";
import awsLogo from "../../../../Assets/images/aws-logo.png";
import googleCloudLogo from "../../../../Assets/images/google-cloud-logo.png";
import azureLogo from "../../../../Assets/images/azure-logo.png";
import {ModalStep, WorkSpaceName} from "./WorkSpaceCreate";


export const FirstStep = () => {
  const {page, setPage} = useContext(ModalStep);
  const {name, setName}= useContext(WorkSpaceName)
  const [serv, setServ] = useState();
  const [error, setError] = useState()

  function handleName (e){
    setName(e.target.value)
  }

  function handleCheckbox(e) {
    setServ(e.target.id)
  }

  function handleNext() {

    if(name?.length > 0 && serv?.length >0){
      setPage(serv)
    } else{
      setError("Enter workspace name & choose a service")
    }
  }




  return (
    <div className="h-full">
      <div className="intro-y bg-white rounded-br-[150px] rounded-bl-[150px] py-10 h-full ">
        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold text-center text-2xl">
            Create Your First WorkSpace
          </div>
          <div className="text-slate-500 text-center mt-2">To start off, please enter your username, email address
            and password.
          </div>
          {error && <span className="text-danger animate-bounce mt-4	">{error}</span>}
        </div>
        <div className="px-5 sm:px-20 mt-4  ">
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="w-4/12">
              <label htmlFor="regular-form-2" className="form-label">
                Name :
              </label>
              <input id="name" onChange={handleName} type="text" className="form-control form-control-lg" placeholder="Workspace Name" value={name}/>
            </div>
            <div className="w-4/12  mt-8 ">
              <label htmlFor="regular-form-2" className="form-label">
                Select Services :
              </label>
              <div className="grid grid-cols-1  gap-2">
                <label className={"cursor-pointer flex justify-between items-center border rounded-lg p-4 " + (serv === 'aws' ? ' bg-white shadow-xl'  : 'bg-gray-100 ')}>
                  <div className="flex items-center">
                    <img className="h-8" src={awsLogo} alt="logo"/>
                    <span className="block text-xs text-center ml-4">
                          Amazon Web Services
                        </span>
                  </div>
                  <input
                    id="aws"
                    className="form-check-input hidden "
                    type="checkbox"
                    onChange={handleCheckbox}
                    value=""/>
                </label>
                <label className={"cursor-pointer  flex justify-between items-center border rounded-lg p-4 " + (serv === 'google'  ? ' bg-white shadow-xl'  : 'bg-gray-100 ')}>
                  <div className="flex items-center">
                    <img className="h-8" src={googleCloudLogo} alt="google-logo"/>
                    <span className="block text-xs text-center ml-4">
                      Google Cloud
                    </span>
                  </div>
                  <input
                    id="google"
                    className="form-check-input hidden"
                    type="checkbox"
                    value=""
                    onChange={handleCheckbox}
                  />
                </label>
                <label className={"cursor-pointer  flex justify-between items-center border rounded-lg p-4 " + (serv === 'azure'  ? ' bg-white shadow-xl'  : 'bg-gray-100 ')}>
                  <div className="flex items-center">
                    <img className="h-8" src={azureLogo} alt="azure-logo"/>
                    <span className="block text-xs text-center ml-4">
                          Microsoft Azure
                        </span>
                  </div>
                  <input
                    id="azure"
                    className="form-check-input hidden"
                    type="checkbox"
                    onChange={handleCheckbox}
                    value=""/>
                </label>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="btn btn-primary mt-8 w-4/12 ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}