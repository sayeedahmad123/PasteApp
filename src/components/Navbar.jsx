import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justi-center space-x-40'>
     <NavLink to="/" className="text-blue-500 hover:text-blue-700">
        Home
     </NavLink>

     <NavLink to="/pastes" className="text-blue-500 hover:text-blue-700"> 
        Pastes
     </NavLink>

    </div>
  )
}

export default Navbar
