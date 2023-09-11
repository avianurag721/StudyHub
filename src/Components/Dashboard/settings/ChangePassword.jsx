import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { changePassword } from "../../../Services/operations/settingsApi";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [showOldPassword, setshowOldPassword] = useState(false);
  const [showNewPassword, setshowNewPassword] = useState(false);

  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const { newPassword, oldPassword } = password;

  const handleChange = (e) => {
    setPassword((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword(token, password));
    resetData();
  };

  const resetData = () => {
    setPassword({
      oldPassword: "",
      newPassword: "",
    });
  };
  return (
    <div className="flex flex-col gap-8  rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
      <form onSubmit={handleSubmit}>
        <h1 className=" text-2xl my-4">Change Password</h1>
        <div className=" flex flex-col gap-16 lg:flex-row justify-between w-full">
          <div className=" relative flex w-full  flex-col gap-2">
            <label>Old Password</label>
            <div>
              <input
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter Old Password"
                name="oldPassword"
                onChange={handleChange}
                value={oldPassword}
                className=" bg-richblack-700 outline-none text-white rounded-md px-4  py-3 w-full border-b-2 border-richblack-200"
              />
              <span
                onClick={() => setshowOldPassword((prev) => !prev)}
                className=" absolute top-12 right-8"
              >
                {showOldPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>
          <div className=" relative flex w-full  flex-col gap-2">
            <label>Last Name</label>
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder=" Enter New password"
              name="newPassword"
              onChange={handleChange}
              value={newPassword}
              className=" bg-richblack-700 outline-none text-white rounded-md px-4 py-3 w-full border-b-2 border-richblack-200"
            />
            <span
              onClick={() => setshowNewPassword((prev) => !prev)}
              className=" absolute top-12 right-8"
            >
              {showNewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
        </div>
        <div className=" flex gap-6 w-full  my-4 justify-end">
          <button
            onClick={() => resetData()}
            className=" py-2  px-3  bg-yellow-50 text-black rounded-md"
          >
            Cancel
          </button>
          <button
            onSubmit={handleSubmit}
            type="submit"
            className=" py-2  px-3  bg-richblack-700 text-richblack-200 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
