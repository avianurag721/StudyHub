import React from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const Template = ({ heading, subHeading, quote, type, imgPic, bgFrame }) => {
  return (
    <div className="flex items-center justify-between min-h-[calc(100vh-3.15rem)]  w-full gap-5 bg-richblack-900 text-white ">
      <div className="  max-w-content flex flex-row mx-auto items-center gap-24 justify-center ">
        {/* left divvv */}
        <div className="flex flex-col lg:w-[35%] w-full gap-4">
          <h1 className=" text-4xl ">{heading}</h1>
          <p className=" text-richblack-25  "> {subHeading} </p>
          <p className="font-edu-sa font-bold italic text-blue-100">
            {" "}
            {quote}{" "}
          </p>
          {type === "signup" ? <SignUpForm /> : <LoginForm />}
        </div>
        {/* right wala div   */}
        <div className="relative hidden lg:block ml-5  bg-transparent w-[40%]">
          <img
            src={bgFrame}
            alt="Pattern"
            width={558}
            height={504}
            loading="lazy"
          />
          <img
            src={imgPic}
            alt="Students"
            width={558}
            height={504}
            loading="lazy"
            className="absolute -top-4  right-4 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
