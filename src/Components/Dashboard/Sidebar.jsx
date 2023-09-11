import React from "react";
import { sidebarLinks } from "../../data/dashboard-links";
import SideBarLinks from "./SideBarLinks";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] items-center border-r-richblack-700 bg-richblack-800 py-10">
      <div className="flex flex-col w-full">
        {sidebarLinks.map((link) => {
          if (link.type && user?.accountType !== link.type) return null;
          return (
            <SideBarLinks
              name={link.name}
              key={link.id}
              path={link.path}
              iconName={link.icon}
            />
          );
        })}
      </div>
      <span className=" w-10/12 h-[1px] bg-richblack-700"></span>
      <div className="flex flex-col w-full my-4">
        <SideBarLinks name="Settings" path="/dashboard/settings" iconName="VscSettingsGear" />
      </div>
    </div>
  );
};

export default Sidebar;
