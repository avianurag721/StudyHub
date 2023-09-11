import React, {  useState } from "react";
import { RxCountdownTimer } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../Services/operations/apiAth";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const { signUpData, loading } = useSelector((state) => state.auth);



  console.log("in verify email 1", signUpData);

  const handleVerifyAndSignup = (e) => {
    console.log("in verify email 2", signUpData);
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
    } = signUpData;

    dispatch(
      signUp(
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        accountType,
        navigate
      )
    );
  };
  return (
    <div className=" flex w-full  justify-center bg-richblack-900 text-white items-center min-h-[calc(100vh-3.5rem)] ">
      {loading ? (
        <div>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="flex flex-col  justify-center gap-5  p-4 lg:pl-8 max-w-[500px]  ">
          <h1 className=" text-4xl">Verify Email</h1>
          <p className="text-lg ">
            A verification code has been sent to you. Enter the code below sent
            on <span className=" text-pink-500 "> {signUpData.email}</span>
          </p>
          <form onSubmit={handleVerifyAndSignup}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[46px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
              shouldAutoFocus={true}
              className="bg-richblack-800 text-white flex items-center justify-center"
            />
            <button
              type="submit"
              className=" bg-yellow-100 text-black mt-5 w-full py-4 font-bold rounded-md "
            >
              Verify Email
            </button>
          </form>
          <div className="flex justify-between">
            <div>
              <Link to="/login" className=" flex items-center gap-2">
                <BsArrowLeft /> Back to login{" "}
              </Link>
            </div>
            <div
              onClick={() => dispatch(sendOtp(signUpData.email))}
              className=" flex text-blue-400 "
            >
              <Link className=" flex items-center gap-2">
                <RxCountdownTimer /> Resend it
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
