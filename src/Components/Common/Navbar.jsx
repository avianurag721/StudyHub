import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { matchPath, useLocation, Link, } from "react-router-dom";
import {  useSelector } from "react-redux";
import { categories } from "../../Services/apis";
import { apiConnector } from "../../Services/connector";
import ProfileDropdown from "../core/auth/ProfileDropDown";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const location = useLocation();
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const fetchCategories = async () => {
    console.log("starting to fetrch categories");
    try {
      setLoading(true);
      const res = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(res.data.data);
      console.log("all d fetched categories", res.data.data);
    } catch (error) {
      console.log("error while fetching catalog", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex items-center w-[100%] h-[50px] justify-center bg-richblue-900">
      <div className=" w-[80%] text-white flex flex-row justify-between items-center ">
        <img src={Logo} alt="Logo" />
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks.length ? (
                          <>
                            {subLinks?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className=" flex items-center gap-x-4">
          {/************ isko change kraana hai jb user rko set kr denge  ************ */}

          {/* {token && accountType !== "Instructor" && ( */}
          {token && user.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className="relative flex gap-2 items-center justify-center ">
              <AiOutlineShoppingCart className=" text-lg" />
              {totalItems > 0 && <span className="  text-xs bg-pink-400 px-1 rounded-full">{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="border hover:scale-95 transition-all duration-200 border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Sign Up
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="border hover:scale-95 transition-all duration-200 border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Login
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
