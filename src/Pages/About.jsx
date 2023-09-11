import React from "react";
import img1 from "../assets/Images/aboutus1.webp";
import img2 from "../assets/Images/aboutus2.webp";
import img3 from "../assets/Images/aboutus3.webp";
import foundingStoryImg from "../assets/Images/FoundingStory.png";
import { achievements } from "../data/achievements";
import AboutLearningCards from "../Components/core/aboutUs/AboutLearningCards";
import Footer from "../Components/Common/Footer";
import ContactUsForm from "../Components/core/ContactUsPage/ContactUsForm";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-3.15rem)] bg-richblack-900 text-white font-inter  w-full">
      {/* 1st section   */}
      <div className="flex flex-col py-[7rem] max-h-[35rem] items-center bg-richblack-800 text-white">
        <div className="relative flex flex-col  items-center w-9/12 ">
          <div className="flex text-center flex-col justify-center lg:w-[70%] items-center ">
            <h1 className=" text-2xl lg:w-[63%]  font-bold ">
              Driving Innovation in Online Education for a{" "}
              <span className=" text-blue-200 "> Brighter Future</span>
            </h1>
            <p className=" text-richblack-200 text-center ">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </div>
          <div className=" hidden lg:flex mt-10 gap-5 justify-center">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
          </div>
        </div>
      </div>
      {/* 2nd section  */}
      <div className="flex flex-col py-[7rem] lg:w-10/12 items-center   text-white">
        <h1 className=" text-3xl text-center lg:w-4/5 ">
          " We are passionate about revolutionizing the way we learn. Our
          innovative platform{" "}
          <span className="  bg-gradient-to-b from-blue-200  to-[#afccf6] text-transparent bg-clip-text pr-1 ">
            {" "}
            combines technology
          </span>
          ,{" "}
          <span className=" bg-gradient-to-b from-[#FA1D1D]  to-[#FCB045] text-transparent bg-clip-text ">
            expertise
          </span>
          , and community to create an{" "}
          <span className=" bg-gradient-to-b from-[#891AB4] via-[#FA1D1D] to-[#FCB045] text-transparent bg-clip-text">
            unparalleled educational experience.
          </span>{" "}
          "
        </h1>
      </div>
      {/* 3rd section    */}
      <div className="flex w-[80%] my-5 gap-10 justify-center items-center flex-col">
        <div className="flex flex-col lg:flex-row  justify-between items-center">
          <div className="flex flex-col w-[45%]">
            <h1 className=" bg-gradient-to-b from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-transparent bg-clip-text text-3xl">
              Our Founding Story
            </h1>
            <p className=" text-richblack-200">
              As experienced educators ourselves, we witnessed firsthand the
              limitations and challenges of traditional education systems. We
              believed that education should not be confined to the walls of a
              classroom or restricted by geographical boundaries. We envisioned
              a platform that could bridge these gaps and empower individuals
              from all walks of life to unlock their full potential.
              <br />
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </p>
          </div>
          <div className="w-[40%]">
            <img src={foundingStoryImg} alt="foundingStoryImg" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center my-10">
          <div>
            <h1 className=" bg-gradient-to-b from-[#E65C00]  to-[#F9D423] text-transparent bg-clip-text text-3xl">
              Our Vision
            </h1>
            <p className=" w-[80%] text-richblack-200">
              With this vision in mind, we set out on a journey to create an
              e-learning platform that would revolutionize the way people learn.
              Our team of dedicated experts worked tirelessly to develop a
              robust and intuitive platform that combines cutting-edge
              technology with engaging content, fostering a dynamic and
              interactive learning experience.
            </p>
          </div>
          <div className=" lg:ml-64 flex flex-col">
            <h1 className="flex items-start bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA]  to-[#A6FFCB] text-transparent bg-clip-text text-3xl">
              Our Mission
            </h1>
            <p className=" w-[80%] text-richblack-200">
              our mission goes beyond just delivering courses online. We wanted
              to create a vibrant community of learners, where individuals can
              connect, collaborate, and learn from one another. We believe that
              knowledge thrives in an environment of sharing and dialogue, and
              we foster this spirit of collaboration through forums, live
              sessions, and networking opportunities.
            </p>
          </div>
        </div>
      </div>
      {/* achivements section   */}
      <div className="flex flex-col lg:flex-row w-full py-10 items-center justify-around bg-richblack-700">
        {achievements.map((item, id) => (
          <div key={id} className=" flex justify-center items-center flex-col">
            <h1 className=" text-3xl">{item.data}</h1>
            <span className=" text-richblack-400"> {item.note} </span>
          </div>
        ))}
      </div>

      {/* learning cards section & contact form   */}
      <section className=" flex flex-col mx-auto items-center my-16 justify-center w-[80%]">
        <AboutLearningCards />
      </section>
      <section className=" flex flex-col items-center  justify-center lg:w-[30%] ">
        <div className=" flex gap-2 mb-14 flex-col lg:mx-auto items-center">
          <h1 className=" text-4xl font-bold">Get In Touch</h1>
          <p className="text-richblack-100 mx-2">
            We'd love to here for you, Please fill out this form.
          </p>
        </div>
        <ContactUsForm />
      </section>

      {/* footer secton   */}
      <Footer />
    </div>
  );
};

export default About;
