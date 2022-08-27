import React from 'react'

const Contact = () => {
  return (
    <div>
        <div>
            <div>
                <p>Contact</p>
                <p>Submit the from below to get touch with me</p>
            </div>
            <div>
                <form action="">
                    <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <input type="email" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <textarea name="message" id="" rows="10" className='py-2 bg-transparent rounded-md border-2 '></textarea>
                </form>
                
                
            </div>
        </div>
    </div>
  )
}

export default Contact
