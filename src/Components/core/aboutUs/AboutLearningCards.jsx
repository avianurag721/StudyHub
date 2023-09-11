import React from "react";
import { LearningGridArray } from "../../../data/LearningGrid";
import CTAbuttons from "../../Home/CTAbuttons";
import HighlightText from "../../Home/HighlightText";

const AboutLearningitems = () => {
  return (
    <div className="grid text-white grid-col-1 lg:grid-cols-4 mb-10 p-2 lg:p-5 lg:w-fit">
      {LearningGridArray.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              item.order < 0 ? " col-span-2 lg:h-[280px] p-2 lg:p-5" : "col-span-1 "
            } ${
              item.order % 2 === 1
                ? " bg-richblack-600  lg:h-[280px] p-5"
                : "bg-transparent lg:h-[280px] p-2 lg:p-5"
            }
            ${item.order === 3 && "lg:col-start-2"}
            ${item.order === -1 && "bg-transparent"}`}
          >
            {item.order < 0 ? (
              <div className="lg:w-[90%] flex flex-col pb-5 gap-3">
                <div className="text-4xl font-semibold">
                  {item.heading}
                  <HighlightText text={item.highlightText} />
                </div>
                <p className="font-medium">{item.description}</p>
                <div className="w-fit mt-4">
                  <CTAbuttons active={true} linkto={item.BtnLink}>
                    {item.BtnText}
                  </CTAbuttons>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 lg:gap-8 p-1 lg:p-7">
                <h1 className="text-richblack-5 text-lg">{item.heading}</h1>
                <p className="text-richblack-300 font-medium">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AboutLearningitems;
