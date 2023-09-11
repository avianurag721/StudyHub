import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPasswordResetToken } from "../Services/operations/apiAth";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ForgotPassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const [emailSent, setemailSent] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setemailSent));
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-3.15rem)] bg-richblack-900 text-white  w-full">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="flex flex-col   w-full gap-5 bg-richblack-900 text-white  justify-center  lg:w-[26%] ">
          <h1 className="text-3xl">
            {emailSent ? "Check email" : "Reset your Password"}
          </h1>
          <span className=" text-richblack-50 ">
            {emailSent
              ? `we have sent the reset link to  ${email}`
              : "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"}
          </span>

          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            {!emailSent && (
              <label className="flex flex-col">
                <span>
                  E-mail address{" "}
                  <sup className="text-pink-200 font-bold">*</sup>
                </span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className=" text-black outline-none font-bold w-full py-2 rounded-md pl-2 "
                />
              </label>
            )}
            <button
              className=" bg-yellow-100 rounded-md py-2 text-black font-bold "
              type="submit"
            >
              {emailSent ? "Resend Email" : "Reset Password"}
            </button>
          </form>
          <Link className="flex items-center" to="/login">
            {" "}
            <BsArrowLeft /> Back to login
          </Link>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
