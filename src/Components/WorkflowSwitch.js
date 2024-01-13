import React, {useEffect, useRef, useState} from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineChevronRight,
  MdAdd
} from 'react-icons/md'
import {Link} from "react-router-dom";


export const WorkflowSwitch = ({workspace}) => {
  const [show, setShow] = useState(false)
  const [selectedId, setSelectedId] = useState()
  const [active, setActive] = useState()
  const [defaultWs, setDefaultWs] = useState()
  const wrapper = useRef()

  function handleShow() {
    setShow(!show)
  }

  function handleChange(e) {
    setSelectedId(e.currentTarget.id)
    setShow(!show)
    setActive(e.currentTarget.getAttribute("data-name"))
  }

  useEffect(() => {
    setDefaultWs(workspace[0])
    function handleClickOutside(event) {
      if (wrapper.current && !wrapper.current.contains(event.target)) {
        setShow(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [{wrapper}])

  return (
    <div className="relative h-full border-r border-white/20 " ref={wrapper}>
      <button onClick={handleShow} className="flex justify-between items-center h-full">
        <div className="flex flex-col px-4  items-start text-sm">
          <div className=" text-gray-600 flex items-start text-xs font-medium text-white ">
            Workspace
          </div>
          <span className="  text-lg text-white ">
              {active ? active : (defaultWs?.workspaceName)}
          </span>
        </div>
        <div className="ml-4 mr-4 text-white">
          {!show ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}
        </div>
      </button>
      {show &&
        <div className="z-50 flex flex-col items-start absolute h-auto  bg-white shadow-2xl   border overflow-hidden ">
          <div className=" box-border relative bg-gray-50  w-full flex">
            <div className="border-r min-w-[300px] h-full ">
              <div className="px-4 py-2 text-sm font-semibold text-gray-800 w-full border-b">
                Switch to:
              </div>
              <div className="border- w-full h-56 overflow-auto ">
                {workspace.map((i, k) =>
                  <button
                    key={k + 1}
                    id={i.workspaceId}
                    data-name={i.workspaceName}
                    onClick={handleChange}
                    className={"px-4  py-2 border-b w-full  flex justify-between items-center  bg-white " + (selectedId === i.workspaceId && 'bg-blue-50')}
                  >
                    <div className="flex flex-col text-left">
                     <span className="text-sm font-semibold">
                       {i.workspaceName}
                     </span>
                    </div>
                    {selectedId === i.workspaceId && <MdOutlineChevronRight className="text-xl"/>}
                  </button>
                )}
              </div>
              <Link
                to="/workspace-create"
                onClick={handleChange}
                className="px-2  py-2 border-b w-full  flex justify-center items-center  bg-transparent border-t "
              >
                <MdAdd/>
                <span className="text-blue-500 ml-1">
                    Create new workspace
                  </span>
              </Link>
            </div>

          </div>
        </div>
      }
    </div>
  )
}

