import React from "react";
import CTAbuttons from "./CTAbuttons";
import {TypeAnimation } from "react-type-animation";

import { BsArrowRight } from "react-icons/bs";

const CodeBlocks = ({
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  direction,
  codeColor,
  codeblock,
  backgroundGradient,
}) => {
  return (
    <div className={`flex ${direction} items-center gap-24 w-[90%]`}>
      <div className=" w-[50%] flex flex-col ">
        <div className="  text-4xl  text-white font-bold"> {heading} </div>
        <div className="font-bold my-6 text-richblack-300 w-[80%] ">
          {" "}
          {subheading}{" "}
        </div>

        <div className="flex mt-10 gap-2">
          <div className="flex ">
            <CTAbuttons
              linkto={ctabtn1.link}
              active={ctabtn1.active}
              className="flex"
            >
              {ctabtn1.btnText} <BsArrowRight />{" "}
            </CTAbuttons>
          </div>
          <CTAbuttons linkto={ctabtn2.link} active={ctabtn2.active}>
            {ctabtn2.btnText}
          </CTAbuttons>
        </div>
      </div>
      <div className="h-fit border-2 border-richblack-800 flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
        {backgroundGradient}
        <div className="text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
