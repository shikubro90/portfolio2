import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-between items-center px-4 fixed w-full h-20'>
      <div>
        <h1 className=''>Shiku</h1>
      </div>
      <div>
        <h1>Menu Bar</h1>
      </div>
    </div>
  )
}

export default Navbar