import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getUserEnrolledCourses } from "../../../Services/operations/profileAPI";

const PurchaseHistory = () => {
  const { token } = useSelector((state) => state.auth);

  const [enrolledCourses, setEnrolledCourses] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await getUserEnrolledCourses(token); // Getting all the published and the drafted courses

        // console.log("in purchase history  0", res);
        // Filtering the published course out
        const filterPublishCourse = res.filter((ele) => ele.status !== "Draft");
        setEnrolledCourses(filterPublishCourse);
        console.log("in purchase history........1", enrolledCourses);
      } catch (error) {
        console.log("Could not fetch enrolled courses.");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="text-3xl text-richblack-50">Your Purchase History</div>
      {!enrolledCourses ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !enrolledCourses.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
          You have not enrolled in any course yet.
          {/* TODO: Modify this Empty State */}
        </p>
      ) : (
        <div className="my-8 text-richblack-5">
          {enrolledCourses.map((course, i, arr) => (
            <div
              className={`flex flex-col gap-4 lg:w-2/4 justify-center items-center rounded-md bg-richblack-700 p-4 text-richblack-5`}
            >
              {/* Course Image */}
              <img
                src={course?.thumbnail}
                alt={course?.courseName}
                className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full"
              />

              <div className="px-4">
                <div className="space-x-3 pb-4 text-3xl font-semibold text-yellow-25">
                  Rs. {course.price}
                </div>
              </div>
              {course.tag.map((tag, index) => (
                <p key={index}>
                  <span className=" text-caribbeangreen-200">Tags:-</span>
                  {tag}
                </p>
              ))}
              <p>
                {" "}
                <span className=" text-pink-200">About Course:)</span>{" "}
                {course.courseDescription}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
    // <p>d</p>
  );
};

export default PurchaseHistory;
