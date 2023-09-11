import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../Services/operations/apiAth";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-3.15rem)] bg-richblack-900 text-white  w-full">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className=" flex flex-col w-[28%] gap-5 justify-center ">
          <h1 className="text-4xl text-yellow-100">Update Password</h1>
          <p className=" text-richblack-50 text-lg ">
            Almost done. Enter your new password and you are all set.
          </p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <span>
                Password <sup className="  text-pink-200 ">*</sup>{" "}
              </span>
              <input
                className="text-white bg-richblack-700 border-b-[2px] border-richblack-200 rounded-md outline-none font-bold py-2"
                type="text"
                value={password}
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <label className="flex flex-col">
              <span>
                Confirm Password <sup className="  text-pink-200 ">*</sup>{" "}
              </span>
              <input
                className="text-white bg-richblack-700 border-b-[2px] border-richblack-200 rounded-md outline-none font-bold  py-2"
                type="text"
                value={confirmPassword}
                name="confirmPassword"
                placeholder="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <div className=" flex gap-2 py-5 flex-wrap">
              <p className=" flex items-center justify-center gap-1 text-caribbeangreen-300">
                <AiOutlineCheckCircle /> one lowercase character
              </p>
              <p className=" flex items-center justify-center gap-1 text-caribbeangreen-300">
                <AiOutlineCheckCircle /> one character minimum
              </p>
              <p className=" flex items-center justify-center gap-1 text-caribbeangreen-300">
                <AiOutlineCheckCircle /> one lowercase character
              </p>
              <p className=" flex items-center justify-center gap-1 text-caribbeangreen-300">
                <AiOutlineCheckCircle /> one number minimum
              </p>
              <p className=" flex items-center justify-center gap-1 text-caribbeangreen-300">
                <AiOutlineCheckCircle /> one special character
              </p>
            </div>
            <button
              type="submit"
              className=" hover:scale-95 transition-all duration-200 w-full rounded-md py-2 bg-yellow-50 text-black font-bold "
            >
              Reset Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
