import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex w-screen justify-evenly bg-sky-900 h-[8%] items-center py-4'>

            <NavLink to='/' className='text-sky-100 text-2xl font-bold hover:text-sky-300 transition-all duration-300'>
              All Shows
            </NavLink>
            <NavLink to='/summary' className='text-sky-100 text-2xl font-bold hover:text-sky-300 transition-all duration-300'>
              Summary
            </NavLink>
            <NavLink to='/help' className='text-sky-100 text-2xl font-bold  hover:text-sky-300 transition-all duration-300'>
              Help & Support
            </NavLink>
      
    </div>
  )
}

export default NavBar