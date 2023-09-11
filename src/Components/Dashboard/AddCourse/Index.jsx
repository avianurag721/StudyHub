import React from "react";
import RenderSteps from "./RenderSteps";

const Index = () => {
  return (
    <>
      <div className="text-white flex gap-5">
        <div className=" w-7/12 ">
          <h1>Add Course</h1>
          <div className="bg-richblack-800 p-4 rounded-md border border-richblack-600">
            <RenderSteps />
          </div>
        </div>
        <div className=" rounded-md border-[1px] border-richblack-600 bg-richblack-800 p-5 max-h-[23rem]">
          <p>Code Upload Tips</p>
          <ul className=" text-xs leading-10"  >
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;
