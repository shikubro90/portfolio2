import React from 'react'
import heroImage from '../assets/about_me.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className=''>
            <div>
                <h1>I'm fullstack web developer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat excepturi ea veritatis officia magnam. Magnam a facilis, sit amet cumque, tempora itaque reiciendis beatae saepe repellat dolores in numquam natus.</p>
                <button>
                    See More
                    <span>
                        <MdOutlineKeyboardArrowRight/>
                    </span>
                </button>
            </div>
            <div>
                <img src={heroImage} alt="heroImage"/>
            </div>
        </div>
    </div>
  )
}

export default Home