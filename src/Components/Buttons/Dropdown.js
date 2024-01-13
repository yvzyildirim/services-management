import React, {useEffect, useRef, useState} from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from 'react-icons/md'
import {Link} from "react-router-dom";

export const Dropdown = ({label,child}) =>{
  const [show, setShow] = useState(false)
  const wrapper = useRef()
  function handleShow(){
    setShow(!show)
  }
  useEffect(()=>{
    function handleClickOutside(event) {
      if (wrapper.current && !wrapper.current.contains(event.target)) {
        setShow(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapper])

  return(
    <div className="mx-2 relative" ref={wrapper}>
      <button
        onClick={handleShow}
        className="flex justify-between items-center py-2 btn btn-outline-secondary font-normal"
      >
        <span className="text-sm">{label}</span>
       <div className="ml-4">
         {!show ? <MdKeyboardArrowDown /> :  <MdKeyboardArrowUp />}
       </div>
      </button>
      {show &&
        <div className="z-10  flex flex-col items-start absolute min-w-[150px] h-auto  bg-white shadow-md rounded-md border overflow-hidden mt-2">
          {child? child : 'empty'}
        </div>
      }
    </div>
  )
}