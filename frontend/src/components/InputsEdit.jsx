import React from "react";

const InputsEdit = ({ icon, place, type, ...props }) => {
  return (
    <div className="flex items-center font-meera w-full h-12 rounded-md  bg-[#3e304d]">
      {icon}
      <input
        type={type}
        placeholder={place}
        className="h-full w-full bg-transparent relative outline-none pl-14 pr-4  rounded-md border-double border-[#5f5b71] 
            focus:border-4 focus:border-[#5f5b71] focus:ring-2 focus:ring-[#5f5b71]/40"
        {...props}
      />
    </div>
  );
};

export default InputsEdit;
