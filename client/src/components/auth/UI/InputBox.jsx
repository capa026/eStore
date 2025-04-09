import React from "react";

const InputBox = ({ children, icon }) => {
  return (
    <div
      className="flex justify-between items-center border border-gray-600 px-2 py-1 rounded-md focus-within:outline-1 [&_input]:w-full [&_input]:py-2 [&_input]:focus:outline-none

    "
    >
      {children}
      {icon && icon}
    </div>
  );
};

export default InputBox;
