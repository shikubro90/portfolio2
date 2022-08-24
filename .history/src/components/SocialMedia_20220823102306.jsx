import React from 'react'

import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

const SocialMedia = () => {
  return (
    <div className='flex flex-col fixed top30'>
        <ul>
            <li>
                <>
                    <a href=""></a>
                </>
                <>
                    LinkedIn <FaLinkedin/>
                </>
            </li>

            <li>
                <>
                    <a href=""></a>
                </>
                <>
                    GitHub <FaGithub/>
                </>
            </li>
        </ul>
    </div>
  )
}

export default SocialMedia
