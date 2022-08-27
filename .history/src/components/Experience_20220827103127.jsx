import React from 'react'


const experience = [
  {
    id : 1,
    src: "https://reactjs.org/logo-og.png"
  },
  {
    id : 2,
    src: "https://reactjs.org/logo-og.png"
  },
  {
    id : 3,
    src: "https://reactjs.org/logo-og.png"
  },
  {
    id : 4,
    src: "https://reactjs.org/logo-og.png"
  },
  {
    id : 5,
    src: "https://reactjs.org/logo-og.png"
  },
  {
    id : 6,
    src: "https://reactjs.org/logo-og.png"
  }
]


const Experience = () => {
  return <div name="experience" className='bg-gradient-to-b from-gray-800 to-black-800'>
      <div>
        <div>
          <div>
            <p>Experience</p>
            <p>There are the technology i work with</p>
          </div>
          <div>
            <img src={experience[0].src} alt="" />
          </div>
        </div>
      </div>
  </div>
  
}

export default Experience
