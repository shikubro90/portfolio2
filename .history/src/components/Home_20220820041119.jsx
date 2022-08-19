import React from 'react'
import heroImage from '../assets/about_me.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='flex flex-col md:flex-row items-center justify-center h-full px-4'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl sm:text-7xl font-bold'>I'm fullstack web developer</h1>

                <p className='text-gray-500 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat excepturi ea veritatis officia magnam. Magnam a facilis, sit amet cumque, tempora itaque reiciendis beatae saepe repellat dolores in numquam natus.</p>

                <button className='flex flex-row items-center'>
                    See More
                    <span>
                        <MdOutlineKeyboardArrowRight/>
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