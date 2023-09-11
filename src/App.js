import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";
import OpenRoute from "./Components/core/auth/OpenRoute";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import VerifyEmail from "./Pages/VerifyEmail";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import PasswordResetSuccess from "./Pages/PasswordResetSuccess";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import PrivateRoute from "./Components/core/auth/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";
import MyProfile from "./Components/Dashboard/MyProfile";
import { useSelector } from "react-redux";
import EnrolledCourses from "./Components/Dashboard/Student/EnrolledCourses";
import PurchaseHistory from "./Components/Dashboard/Student/PurchaseHistory";
import Settings from "./Components/Dashboard/settings/Settings";
import Cart from "./Components/Dashboard/Cart";
import Index from "./Components/Dashboard/AddCourse/Index";
import MyCourses from "./Components/Dashboard/MyCourses";
import EditCourse from "./Components/Dashboard/InstructorCourses/EditCourse";
import Catalog from "./Pages/Catalog";
import CourseDetails from "./Pages/CourseDetails";
import ViewCourse from "./Pages/ViewCourse";
import VideoDetails from "./Components/core/ViewCourse/VideoDetails";
import Instructor from "./Components/Dashboard/Instructor";

function App() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className=" min-h-screen max-w-full  bg-pure-greys-5 font-inter  flex flex-col items-center overflow=y-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="courses/:courseId" element={<CourseDetails/>} />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route
          path="reset-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

        <Route
          path="/update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="/password-reset-success"
          element={
            <OpenRoute>
              <PasswordResetSuccess />
            </OpenRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />
          {user?.accountType === "Student" && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />

              <Route
                path="dashboard/purchase-history"
                element={<PurchaseHistory />}
              />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
            </>
          )}
          {user?.accountType === "Instructor" && (
            <>
              <Route path="dashboard/add-course" element={<Index />} />
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
        </Route>
        <Route element={
        <PrivateRoute>
          <ViewCourse />
        </PrivateRoute>
      }>

      {
        user?.accountType === "Student" && (
          <>
          <Route 
            path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetails />}
          />
          </>
        )
      }

      </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
