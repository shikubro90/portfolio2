import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'About Me',
    },
    {
      id: 3,
      link: 'Portfolio',
    },
    {
      id: 4,
      link: 'Experience',
    },
    {
      id: 5,
      link: 'Contact',
    },
  ]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Shiku</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link></Link>
              {link.link}
            </li>
          )
        })}
      </ul>
      <div
        onClick={() => {
          return setNav(!nav)
        }}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 w-full flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 py-6 text-3xl cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "
              >
                {link}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Navbar
