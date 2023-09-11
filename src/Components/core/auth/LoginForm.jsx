import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { login } from "../../../Services/operations/apiAth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setloginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setloginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    const { email, password } = loginData;
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-5 flex-col">
      <label className="flex flex-col gap-2">
        <span>
          Email <sup className="text-pink-200 font-bold">*</sup>{" "}
        </span>
        <input
          type="email"
          value={loginData.email}
          name="email"
          onChange={handleChange}
          placeholder="Enter e-mail Address"
          className=" text-richblack-900 bg-richblack-700 border-b-[2px]  border-richblack-200  rounded-md p-2 font-bold outline-none "
        />
      </label>
      <label className=" relative flex flex-col gap-2 mt-2">
        <span>
          Password <sup className="text-pink-200 font-bold">*</sup>
        </span>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={loginData.password}
          name="password"
          onChange={handleChange}
          className=" text-richblack-900 bg-richblack-700 border-b-[2px]  border-richblack-200  rounded-md p-2 font-bold outline-none "
        />
        <span
          className="absolute top-12 right-5 lg:right-[8%] text-black "
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}{" "}
        </span>

        <Link to="/reset-password" className=" flex items-end">
          <p className=" ml-auto text-xs text-blue-300"> forgot password?</p>
        </Link>
      </label>
      <button
        type="submit"
        className=" bg-yellow-25 text-black mt-4 rounded-md py-2"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
