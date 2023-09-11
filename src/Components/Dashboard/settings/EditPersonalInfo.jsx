import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../Services/operations/settingsApi";
import { useNavigate } from "react-router-dom";

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"];

const EditPersonalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    contactNo: "",
    about: "",
    gender: "",
  });
  const {  dob, contactNo, about, gender } = formData;

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(token, formData));
    console.log("formdata", formData);
    resetData();
  };
  const resetData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      contactNo: "",
      about: "",
      gender: "",
    });
    navigate("/dashboard/my-profile");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8  rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5"
    >
      <h1 className=" text-2xl py-4">Personal Information</h1>
      <div className=" flex flex-col gap-16 lg:flex-row justify-between w-full">
        <div className=" flex w-full  flex-col gap-2">
          <label>First Name</label>
          <input
            type="text"
            placeholder=" First Name"
            name="firstName"
            defaultValue={user.firstName}
            className=" bg-richblack-700 outline-none text-white rounded-md px-4  py-3 w-full border-b-2 border-richblack-200"
            //defaultValue={user.firstName}//
          />
        </div>
        <div className=" flex w-full  flex-col gap-2">
          <label>Last Name</label>
          <input
            type="text"
            placeholder=" Last Name"
            name="lastName"
            defaultValue={user.lastName}
            //defaultValue={user.firstName}//={user.lastName}
            className=" bg-richblack-700 outline-none text-white rounded-md px-4 py-3 w-full border-b-2 border-richblack-200"
          />
        </div>
      </div>
      <div className=" flex flex-col gap-16 lg:flex-row justify-between w-full">
        <div className=" flex w-full  flex-col gap-2">
          <label>Date of Birth</label>
          <input
            type="date"
            placeholder=" Date Of Birth"
            name="dob"
            onChange={handleChange}
            value={dob}
            className=" bg-richblack-700 outline-none text-white rounded-md px-4  py-3 w-full border-b-2 border-richblack-200"
            //defaultValue={user.firstName}//={user.dateOfBirth ?? ""}
          />
        </div>
        <div className=" flex w-full  flex-col gap-2">
          <label>Last Name</label>
          <select className=" bg-richblack-700 outline-none text-white rounded-md px-4  py-4 w-full border-b-2 border-richblack-200">
            {genders.map((sex, index) => (
              <option
                key={index}
                name="gender"
                onChange={handleChange}
                value={gender}
              >
                {sex}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className=" flex flex-col gap-16 lg:flex-row justify-between w-full">
        <div className=" flex w-full  flex-col gap-2">
          <label>Contact No.</label>
          <input
            type="text"
            name="contactNo"
            onChange={handleChange}
            value={contactNo}
            placeholder="Contact no."
            className=" bg-richblack-700 outline-none text-white rounded-md px-4  py-3 w-full border-b-2 border-richblack-200"
            //defaultValue={user.firstName}//={user.contactNumber}
          />
        </div>
        <div className=" flex w-full  flex-col gap-2">
          <label>About</label>
          <input
            type="text"
            placeholder=" About"
            name="about"
            value={about}
            //defaultValue={user.firstName}//={user.about}
            onChange={handleChange}
            className=" bg-richblack-700 outline-none text-white rounded-md px-4 py-3 w-full border-b-2 border-richblack-200"
          />
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
  );
};

export default EditPersonalInfo;
