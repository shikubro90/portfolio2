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
    id : 1,
    src: "https://reactjs.org/logo-og.png"
  },
  {
    id : 1,
    src: "https://reactjs.org/logo-og.png"
  },
  {
    id : 1,
    src: "https://reactjs.org/logo-og.png"
  },
  {
    id : 1,
    src: "https://reactjs.org/logo-og.png"
  },
]


const Experience = () => {
  return <div>
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
