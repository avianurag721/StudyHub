import React from "react";
import Template from "../Components/core/auth/Template";
import imgPic from "../assets/Images/signup.webp"
import backgroundPic from "../assets/Images/frame.png"

const SignUp = () => {
  return (
    <Template heading={"Join the millions learning to code with StudyNotion for free"}
      subHeading={"Build skills for today, tomorrow, and beyond."}
      quote={"Education to future-proof your career."}
      type={"signup"}
      imgPic={imgPic}
      bgFrame={backgroundPic}
    />
  );
};

export default SignUp;
