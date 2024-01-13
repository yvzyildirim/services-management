import React, { useEffect, useRef, useState } from "react";
import { MdCheck } from "react-icons/md";

export const SelectBox = ({ label, onSelect, values, className }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const wrapper = useRef();

  function handleSelect(e) {
    setOpen(false);
    setSelected(e.currentTarget.dataset?.id);
    onSelect(e);
  }

  useEffect(() => {
    setSelected(values[0]?.id);
    function handleClickOutside(event) {
      if (wrapper.current && !wrapper.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={className}>
      <div
        data-id="selectId"
        onClick={() => setOpen(!open)}
        className="btn btn-default relative w-full bg-white pointer"
      >
        {label}
      </div>
      {open && (
        <div
          ref={wrapper}
          className="absolute  mt-2 z-20 bg-white border shadow-xl rounded-md "
        >
          {values?.map((i, k) => (
            <button
              key={k + 1}
              data-id={i.id}
              data-value={i.value}
              onClick={handleSelect}
              className="w-full flex  justify-between items-center cursor-default select-none relative py-2 px-4 text-gray-900 hover:bg-blue-100"
            >
              <span>{i.value}</span>
              {selected === i.id && <MdCheck className="ml-10" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
