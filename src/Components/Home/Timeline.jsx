import React from "react";
import HighlightText from "./HighlightText";
import CTAbuttons from "./CTAbuttons";
import Logo1 from "../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg";
import timeLineimg from "../../assets/Images/TimelineImage.png";

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const Timeline = () => {
  return (
    <div className=" flex flex-col py-10  items-center justify-center bg-pure-greys-5">
      <div className=" w-[80%] my-20  flex text-richblack-700 flex-col items-center ">
        <div className="flex flex-col  lg:flex-row gap-7 justify-between t4">
          <div className=" justify-center">
            <h1 className="text-4xl font-bold">
              Get the Skills Your need for
              <HighlightText text={" job that is in demand."} />{" "}
            </h1>
          </div>
          <div className="flex items-start lg:ml-20 flex-col gap-8">
            <p>
              The modern StudyNotion is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
            </p>
            <CTAbuttons active={true} linkto={"/login"}>
              Learn More
            </CTAbuttons>
          </div>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row  gap-20 ">
        {/* left div   */}
        <div className=" w-11/12 lg:w-[45%] flex flex-col ">
          {TimeLine.map((content, index) => (
            <div key={index} className="flex gap-4 my-8 items-center flex-row">
              <div className=" rounded-full bg-white p-5 ">
                <img src={content.Logo} alt="" />
              </div>
              <div>
                <h2 className=" font-bold  "> {content.Heading} </h2>
                <p> {content.Description} </p>
              </div>
            </div>
          ))}
        </div>

        {/* right  image wala div   */}
        <div className="relative  w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <img
            src={timeLineimg}
            alt="timeLine"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover :h-[400px] lg:h-fit"
          />
          <div className=" bg-caribbeangreen-700 items-center  capitalize lg:translate-x-10 bottom-[-50px] p-10  gap-5 text-white absolute flex flex-row ">
            {/* left wala   */}
            <div className=" flex gap-5 items-center flex-row">
              <h2 className="text-4xl">10</h2>
              <p className="text-caribbeangreen-300">YEARS OF EXPERIENCE</p>
            </div>

            {/* right wala   */}
            <div className="items-center border-l-[1px] border-x-caribbeangreen-300 gap-5 flex flex-row">
              <h2 className="text-4xl pl-3">250</h2>
              <p className="text-caribbeangreen-300">TYPES OF COURSES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
