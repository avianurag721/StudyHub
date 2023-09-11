import React from 'react'
import {RiEditBoxLine} from "react-icons/ri"
import { NavLink } from 'react-router-dom'

const DashboardButton = () => {
  return (
    // edit button  on my 
    <NavLink to="/dashboard/settings" className="flex items-center py-1  px-2 gap-2 bg-yellow-50 text-black rounded-md" >
     Edit <RiEditBoxLine  />
    </NavLink>
  )
}

export default DashboardButton
