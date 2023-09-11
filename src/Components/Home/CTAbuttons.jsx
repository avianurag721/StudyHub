import React from 'react'
import { Link } from 'react-router-dom'

const CTAbuttons = ({children,active ,linkto}) => {
    return (
      <Link to={linkto}>
      <div className= {` px-2 py-2 lg:px-6 lg:py-3 items-center gap-1 hover:scale-95 rounded-md font-bold flex transition-all duration-200 ${active? "bg-yellow-50  text-black":"bg-richblack-800 text-white"} `} >
          {children}
          
      </div>
      </Link>
    
  )
}

export default CTAbuttons
