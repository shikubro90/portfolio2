import React from 'react'

import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

const links = [
    {
        id : 1,
        child : (
            <>
                LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href : "https://linkedin.com",
        style : 'rounded-tr-md'
    },
    {
        id : 2,
        child : (
            <>
                LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href : "https://linkedin.com",
        style : 'rounded-tr-md'
    },
    {
        id : 3,
        child : (
            <>
                LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href : "https://linkedin.com",
        style : 'rounded-tr-md'
    },
    {
        id : 1,
        child : (
            <>
                LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href : "https://linkedin.com",
        style : 'rounded-tr-md'
    },
]

const SocialMedia = () => {
  return (
    <div className='text-white flex flex-col fixed top-[35%] left-0'>
        <ul>
            <li className='flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md w-40 bg-gray-500 cursor-pointer h-14'>
                <a href="" className='flex justify-between items-center w-full px-4 '>
                LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialMedia
