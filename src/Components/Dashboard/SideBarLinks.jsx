import React from "react";
import * as Icons from "react-icons/vsc";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import { resetCourseState } from "../../reduxState/Slices/courseSlice";
import { useDispatch } from "react-redux";

const SideBarLinks = ({ name, path, iconName }) => {
  const Icon = Icons[iconName];
  const dispatch = useDispatch();
  const location = useLocation();

  const matchRoute = (path) => {
    return matchPath({ path }, location.pathname);
  };

  return (
    <NavLink
      to={path}
      onClick={() => dispatch(resetCourseState())}
      className={`relative px-8 py-2 text-sm font-medium ${
        matchRoute(path)
          ? "bg-yellow-800 text-yellow-50"
          : "bg-opacity-0 text-richblack-300"
      } transition-all duration-200`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
          matchRoute(path) ? "opacity-100" : "opacity-0"
        }`}
      ></span>
      <div className="flex items-center gap-x-2">
        {/* Icon Goes Here */}
        <Icon className="text-lg" />
        <span>{name}</span>
      </div>
    </NavLink>
  );
};

export default SideBarLinks;
