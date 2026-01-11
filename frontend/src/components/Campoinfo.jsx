import React from "react";

const Campoinfo = ({title, info}) => {
  return (
    <div>
      <p className="text-2xl ml-2">{title}</p>
      <div className="flex justify-between items-center border-4 border-double border-[#5f5b71] font-meera w-full h-12 px-5 rounded-md bg-[#3e304d]">
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Campoinfo;
