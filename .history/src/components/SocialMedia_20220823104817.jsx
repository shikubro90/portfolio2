import React from 'react'

import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

const SocialMedia = () => {
  return (
    <div className='text-white flex flex-col fixed top-[35%] left-0'>
        <ul>
            <li className='flex justify-between items-center ml-[-100px] hover hover:rounded-md w-40 bg-gray-500 cursor-pointer h-14'>
                <a href="" className='flex justify-between items-center w-full px-4 '>
                LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialMedia
