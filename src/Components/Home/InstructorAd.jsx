import React from 'react'
import instructorImg from "../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAbuttons from './CTAbuttons'
import {FaArrowRight} from "react-icons/fa"

const InstructorAd = () => {
  return (
      <div className=" flex flex-col py-14  items-center justify-center bg-richblack-900">
          <div className=" w-[80%] text-richblack-25 gap-20 flex flex-col lg:flex-row justify-start  items-center">
              {/* left div  */}
              <div className="shadow-blue-200 pt-8 w-[50%] shadow-[0px_0px_30px_0px" >
                  <img src={instructorImg} alt="instructorImg" className="shadow-white shadow-[-20px_-20px_0px_0px] object-cover :h-[400px] lg:h-fit"/>
              </div>
              {/* right div   */}
              <div className=' flex-col w-[50%] text-white gap-10 flex items-start '>
                  <h1 className='text-4xl font-bold flex flex-col'>Become an  <HighlightText text={" Instructor"} /> </h1>
                  <span>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</span>
                  <CTAbuttons active={true} linkto={"/login"}>Start Teaching Today <FaArrowRight/> </CTAbuttons>
              </div>
          </div>
          
      
    </div>
  )
}

export default InstructorAd
