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

                    <textarea name="" id="" rows="10"></textarea>
                </form>
                
                
            </div>
        </div>
    </div>
  )
}

export default Contact
