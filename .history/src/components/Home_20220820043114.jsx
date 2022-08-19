import React from 'react'
import heroImage from '../assets/about_me.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full '>

            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl sm:text-7xl font-bold'>I'm fullstack web developer</h1>

                <p className='text-gray-500 py-4 max-w-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat excepturi ea veritatis officia magnam. Magnam a facilis, sit amet cumque, tempora itaque reiciendis beatae saepe repellat dolores in numquam natus.</p>

                <button className='group w-fit flex flex-row items-center px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-200'>
                        <MdOutlineKeyboardArrowRight className="ml-1" size={25} />
                    </span>
                </button>

            </div>
            <div>
                <img src={heroImage} alt="heroImage" className='rounded-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default Home