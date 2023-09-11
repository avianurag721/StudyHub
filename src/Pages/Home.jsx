import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CTAbuttons from "../Components/Home/CTAbuttons";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/Home/CodeBlocks";
import HighlightText from "../Components/Home/HighlightText";
import Timeline from "../Components/Home/Timeline";
import LearningCards from "../Components/Home/LearningCards";
import InstructorAd from "../Components/Home/InstructorAd"
import Footer from "../Components/Common/Footer";
//

const home = () => {
  return (
    <div>
      <div className=" flex flex-col pt-10 items-center bg-richblack-900  ">
        <Link
          to="/signup"
          className="flex  items-center justify-center gap-2 transition-all duration-200 hover:scale-95 "
        >
          <div
            className=" flex  items-center justify-center gap-2 text-richblack-300 font-bold hover:bg-richblack-900  border-4
            hover:border-4 border-richblack-800  bg-richblack-800 py-2 px-6 rounded-full "
          >
            <p>Become an Instructor</p>
            <BsArrowRight />
          </div>
        </Link>

        <div className=" lg:py-6 gap-1 text-4xl flex text-white font-bold">
          Empower Your Future with{" "}
          <HighlightText text="Coding Skills"></HighlightText>
        </div>
        <p className="font-bold text-richblack-300 w-[80%] text-center">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </p>

        <div className="flex gap-2 lg:gap-4 mt-16">
          <CTAbuttons active={true} linkto="/learn more">
            Learn More
          </CTAbuttons>
          <CTAbuttons active={false} linkto="/">
            Book A Demo
          </CTAbuttons>
        </div>
        <div className="shadow-blue-200 w-[80%] my-20">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} />
          </video>
        </div>
        <div className=" flex my-20 justify-center w-[90%] gap-10">
          <CodeBlocks
            direction={"flex-row"}
            heading={
              <div className=" ">
                Unlock Your
                <HighlightText text={"coding potential"} />
                with our online courses{" "}
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* codeblock 2 */}
        <div className=" my-28 w-[90%]">
          <CodeBlocks
            direction={"flex-row-reverse"}
            heading={
              <div className="">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lessons",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute "></div>}
          />
        </div>
        
      </div>

      {/* explore more sec tion   */}
      <div className=" bg-pure-greys-5 text-richblack-700  ">
          <div className="homepage h-[450px">
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
              <div className="lg:h-[150px]"></div>
              <div className="flex mb-10 flex-row gap-7 text-white lg:mt-8">
                <CTAbuttons active={true} linkto={"/signup"}>
                  <div className="flex items-center gap-2">
                    Explore Full Catalog
                    <FaArrowRight />
                  </div>
                </CTAbuttons>
                <CTAbuttons active={false} linkto={"/login"}>
                  Learn More
                </CTAbuttons>
              </div>
            </div>
          </div>
      </div>
      <Timeline />
      <LearningCards />
      <InstructorAd />
      <Footer/>

    </div>
  );
};

export default home;
