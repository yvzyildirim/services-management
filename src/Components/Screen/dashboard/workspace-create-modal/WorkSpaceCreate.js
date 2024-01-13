import React, {useState} from "react";
import {FirstStep} from "./firstStep";
import {AwsForm} from "./awsForm";
import {LastStep} from "./lastStep";

export const ModalStep = React.createContext({});
export const WorkSpaceName = React.createContext({});

export const WorkSpaceCreate = () =>{
  const [page, setPage] = useState("first");
  const step = { page, setPage };
  const [name, setName] = useState()
  const workSpaceName = {name, setName}
  return(
    <ModalStep.Provider value={step}>
     <WorkSpaceName.Provider value={workSpaceName}>
       {page === 'first' &&
         <FirstStep />
       }
       {page === 'aws' &&
         <AwsForm />
       }
       {page === 'google' &&
         <div className="text-center">
           <h2 className="w-full text-center text-5xl">
             'GOOGLE'
           </h2>
           <button onClick={()=>setPage('first')} >
             Back
           </button>
         </div>
       }
       {page === 'azure' &&
         <div className="text-center">
           <h2 className="w-full text-center text-5xl">
             'AZURE'
           </h2>
           <button onClick={()=>setPage('first')} >
             Back
           </button>
         </div>
       }
       {page === 'done' &&
         <LastStep />
       }
     </WorkSpaceName.Provider>
    </ModalStep.Provider>

  )
}