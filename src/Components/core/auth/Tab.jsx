import React from "react";

const Tab = ({ accType, setAccType }) => {
  return (
    <div className="flex transition-all duration-200  bg-richblack-700 p-[1px]  w-1/2 justify-center   rounded-full ">
      <div onClick={()=>setAccType(()=>("Student"))} className={` cursor-pointer ${accType==="Student"?"bg-richblack-900 text-richblack-5":"bg-richblack-700 text-richblack-200"}  text-lg px-2 py-2 rounded-full w-[50%] flex  justify-center`} >Student</div>
      <div onClick={()=>setAccType(()=>("Instructor"))} className={` cursor-pointer ${accType==="Instructor"?"bg-richblack-900":"bg-richblack-700"} text-lg px-2 py-2 rounded-full w-[50%] flex  justify-center`}>Instructor</div>
    </div>
  );
};

export default Tab;
