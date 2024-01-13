import React from "react";
import { MdSearch } from "react-icons/md";

export const SearchBar = ({ value, onChange, placeholder, className }) => {
  return (
    <div className={"relative flex justify-between items-center " + className}>
      <input
        type="text"
        className="form-control py-2 px-4 w-full "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <MdSearch className="text-2xl text-gray-400 mr-2 absolute right-2" />
    </div>
  );
};
