import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Tab from "./Tab";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpData } from "../../../reduxState/Slices/authSlice";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../../../Services/operations/apiAth";

const SignUpForm = () => {
  const { signUpData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("Student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    ConfirmationPassword: "",
  });
  const { firstName, lastName, email, password, ConfirmationPassword } =
    formData;
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== ConfirmationPassword) {
      toast.error("Passwords Don't match");
      return;
    }
    const userSignUpdata = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword: ConfirmationPassword,
      accountType,
    };
    console.log("signup data", userSignUpdata);
    dispatch(setSignUpData(userSignUpdata));
    console.log("signup data 2", email);
    dispatch(sendOtp(email, navigate));

    //signUpData ids data that is stored in the store after user has submiited the data  /
    // console.log("signup data", signUpData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      ConfirmationPassword: "",
    });
    setAccountType("Student");
  };
  return (
    <div>
      <Tab accType={accountType} setAccType={setAccountType} />
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <div className="flex justify-between items-center">
          <label className="flex flex-col gap-2">
            <span>
              first Name <sup className="text-pink-200 font-bold">*</sup>{" "}
            </span>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              required
              placeholder="first Name"
              className=" text-white bg-richblack-500 border-b-[2px]  border-richblack-200  rounded-md p-2 font-bold outline-none "
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>
              Last Name <sup className="text-pink-200 font-bold">*</sup>{" "}
            </span>
            <input
              type="text"
              name="lastName"
              value={lastName}
              required
              onChange={handleChange}
              placeholder="Last Name"
              className=" text-white bg-richblack-500 border-b-[2px]  border-richblack-200  rounded-md p-2 font-bold outline-none "
            />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span>
            Email <sup className="text-pink-200 font-bold">*</sup>{" "}
          </span>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
            placeholder="Enter e-mail Address"
            className=" text-white bg-richblack-500 border-b-[2px]  border-richblack-200  rounded-md p-2 font-bold outline-none "
          />
        </label>
        <div className="flex justify-between items-center gap-2">
          <label className="relative flex flex-col gap-2">
            <span>
              Create Password <sup className="text-pink-200 font-bold">*</sup>{" "}
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              autoComplete="on"
              required
              onChange={handleChange}
              placeholder="Password"
              className=" text-white bg-richblack-500 border-b-[2px]  border-richblack-200  rounded-md p-2 font-bold outline-none "
            />
            <span
              className="absolute top-11 right-5 lg:right-[8%] text-black "
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}{" "}
            </span>
          </label>
          <label className="relative flex flex-col gap-2">
            <span>
              Confirm Password <sup className="text-pink-200 font-bold">*</sup>{" "}
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="ConfirmationPassword"
              value={ConfirmationPassword}
              autoComplete="on"
              required
              onChange={handleChange}
              placeholder="Confirm Password"
              className=" text-white bg-richblack-500 border-b-[2px]  border-richblack-200  rounded-md p-2 font-bold outline-none "
            />
            <span
              className="absolute top-11 right-5 lg:right-[8%] text-black "
              onClick={() => setshowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}{" "}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className=" bg-yellow-25 font-bold text-black mt-4 rounded-md py-2"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
