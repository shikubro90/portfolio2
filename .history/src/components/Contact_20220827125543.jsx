import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-'>
        <div>
            <div>
                <p>Contact</p>
                <p>Submit the from below to get touch with me</p>
            </div>
            <div>
                <form action="">
                    <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <input type="email" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <textarea name="message" id="" rows="10" className='py-2 bg-transparent rounded-md border-2 text-white focus:outline-none'></textarea>

                    <button className='py-3 px-6 mx-auto bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md hover:scale-105 duration-300'>Let's talk</button>
                </form>
                
                
            </div>
        </div>
    </div>
  )
}

export default Contact
