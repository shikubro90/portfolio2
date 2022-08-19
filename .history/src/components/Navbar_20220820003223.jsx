import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-between items-center px-4 fixed w-full h-20'>
      <div>
        <h1 className='text-4xl font-signature ml-2'>Shiku</h1>
      </div>
      <div>
        <ul>
          <li className='px-4 cursor-pointer capitalize font-medium tex'>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar