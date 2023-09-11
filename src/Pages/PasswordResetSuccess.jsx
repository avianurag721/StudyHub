import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PasswordResetSuccess = () => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-3.15rem)] bg-richblack-900 text-white  w-full">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="flex gap-5 flex-col  w-[28%]">
          <h1 className="text-4xl">Reset complete!</h1>
          <p>All done! we have successfully reset your Password</p>
          <Link
            className="w-full text-center py-2 rounded-md bg-yellow-50 text-black font-bold"
            to="/login"
          >
            Back to Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default PasswordResetSuccess;
