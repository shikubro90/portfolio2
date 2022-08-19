import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

  const links =[
    {
      id : 1,
      link : "Home"
    },
    {
      id : 2,
      link : "About Me"
    },
    {
      id : 3,
      link : "Portfolio"
    },
    {
      id : 4,
      link : "Experience"
    },
    {
      id : 5,
      link : "Contact"
    },
  ]

  return (
    <div className='bg-black text-white flex justify-between items-center px-4 fixed w-full h-20'>
      <div>
        <h1 className='text-4xl font-signature ml-2'>Shiku</h1>
      </div>
      <div>
        <ul>
          {
            links.map((id,link)=>{
              return(
                <li key={} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 '>
                  {link}
                </li>
              )
            })
          }
          
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar