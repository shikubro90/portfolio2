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
  return <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto px-4 w-full h-full text-white flex flex-col justify-center  '>
        <div>
          <div>
            <p className='text-4xl text-bold border-b-4 inline border-gray-500 p-2
            '>Experience</p>
            <p className='py-6'>There are the technology i work with</p>
          </div>

          <div className='grid grid-col-2'>
            <div>
              <img className='w-full ' src={experience[0].src} alt="" />
              <p>HTML</p>
            </div>

          </div>
        </div>
      </div>
  </div>
  
}

export default Experience
