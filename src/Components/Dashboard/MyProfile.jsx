import React from "react";
import { useSelector } from "react-redux";
import DashboardButton from "../Common/DashboardButton";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className=" flex flex-col gap-8 ">
      <h1 className=" text-4xl "> My Profile</h1>
      <div className=" flex flex-col lg:flex-row py-8 bg-richblack-800 p-4 rounded-md">
        <img
          src={user?.image}
          alt="profile"
          className=" rounded-full"
          width={52}
          height={52}
        />
        <div className=" w-full mx-4 flex items-center justify-between">
          <div>
            <h1 className=" font-bold">
              {user?.firstName + " " + user?.lastName}
            </h1>
            <p className=" text-richblack-200"> {user?.email} </p>
          </div>
          <DashboardButton />
        </div>
      </div>
      {/* about section  */}
      <div className=" flex flex-col lg:flex-row py-8 bg-richblack-800 p-4 rounded-md">
        <div className=" w-full  mx-4 flex flex-col justify-between">
          <div className=" flex justify-between w-full">
            <h1 className=" font-bold  text-2xl text-yellow-50 ">About </h1>
            <DashboardButton />
          </div>
          <div className=" flex flex-col gap-10">
            <p className=" text-richblack-200">
              {user?.additionalDetails?.about ?? "write About Yourself"}
            </p>
          </div>
        </div>
      </div>

      {/* personal fdetails */}
      <div className=" flex flex-col  py-8 bg-richblack-800 p-4 rounded-md">
        <div className=" flex justify-between w-full px-4">
          <h1 className=" font-bold text-2xl text-yellow-50 ">Personal Details </h1>
          <DashboardButton />
        </div>
        <div className=" flex flex-col lg:flex-row justify-between w-1/2 p-4">
          <div>
            <p className=" text-richblack-500">First Name</p>
            <h1> {user.firstName} </h1>
          </div>
          <div>
            <p className=" text-richblack-500">Last Name</p>
            <h1> {user.lastName} </h1>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between w-1/2 p-4">
          <div>
            <p className=" text-richblack-500">E-mail</p>
            <h1> {user.email} </h1>
          </div>
          <div>
            <p className=" text-richblack-500">Phone No.</p>
            <h1> {user.additionalDetails.contactNumber ?? "Add Contact"} </h1>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between w-1/2 p-4">
          <div>
            <p className=" text-richblack-500">Gender</p>
            <h1> {user.gender ?? "Gender"} </h1>
          </div>
          <div>
            <p className=" text-richblack-500">Date of birth</p>
            <h1> {user.additionalDetails.dateOfBirth ?? "Add DOB"} </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
