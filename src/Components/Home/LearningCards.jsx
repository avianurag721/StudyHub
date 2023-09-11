import React from 'react'
import HighlightText from './HighlightText'
import image1 from "../../assets/Images/Know_your_progress.png"
import image2 from "../../assets/Images/Compare_with_others.png"
import image3 from "../../assets/Images/Plan_your_lessons.png"
import CTAbuttons from './CTAbuttons'

const LearningCards = () => {
  return (
      <div className=' bg-pure-greys-5 flex flex-col my-20  items-center justify-center '>
          <div className='flex w-11/12 flex-col items-center   '>
              <div className=' flex flex-col items-center text-center '>
                  <h1  className=' font-bold  text-4xl '>Your swiss knife for <HighlightText text={" learning any language"} /></h1>
                  <p className='mx-auto lg:w-[80%] flex items-center '>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
              </div>
              <div className='flex w-11/12 flex- items-center   '>
                  <img src={image1} alt="imageCards" className=" translate-x-28" />
                  <img src={image2} alt="imageCards"  className=" translate-x-2" />
                  <img src={image3} alt="imagecards" className=" -translate-x-32"/>
              </div>
              <CTAbuttons active={true} linkto={"/login"}>Learn more</CTAbuttons>
          </div>
      
    </div>
  )
}

export default LearningCards
