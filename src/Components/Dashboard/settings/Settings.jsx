import React from "react";
import ChangeProfilePicture from "./ChangeProfilePic";
import EditPersonalInfo from "./EditPersonalInfo";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

const Settings = () => {
  return (
    <div className=" flex flex-col gap-8 ">
      <h1 className=" text-4xl "> Edit Profile</h1>
      {/* profile updation section  */}
      <ChangeProfilePicture />
      <EditPersonalInfo />
      <ChangePassword />
      <DeleteAccount/>
    </div>
  );
};

export default Settings;
