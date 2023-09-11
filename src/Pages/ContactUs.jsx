import React from "react";
import ContactDetails from "../Components/core/ContactUsPage/ContactDetails";
import ContactUsForm from "../Components/core/ContactUsPage/ContactUsForm";
import Footer from "../Components/Common/Footer";

const ContactUs = () => {
  return (
    <div className="flex flex-col  items-center bg-richblack-900 w-full">
      <div className="flex flex-col lg:w-[80%] lg:mg-2 my-10 ">
        <div className="flex flex-col gap-14 lg:flex-row">
          <ContactDetails />
          <div className=" flex flex-col lg:m-2  gap-5 border-[1px] border-richblack-500 rounded-md lg:p-8">
            <h1 className=" text-4xl text-white">
              Got a Idea? We've got the skills. Let's team up
            </h1>
            <p className=" text-richblue-100">
              Tell us more about yourself and what you're got in mind.
            </p>
            <ContactUsForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
