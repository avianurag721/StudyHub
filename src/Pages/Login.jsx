import React from 'react'
import Template from '../Components/core/auth/Template'
import imgPic from "../assets/Images/login.webp"
import backgroundPic from "../assets/Images/frame.png"

const Login = () => {
  return (
    <Template heading={"Welcome Back"}
      subHeading={"Build skills for today, tomorrow, and beyond."}
      quote={"Education to future-proof your career."}
      type={"login"}
      imgPic={imgPic}
      bgFrame={backgroundPic}
    />
  )
}

export default Login
