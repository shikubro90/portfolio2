import React from 'react'


const experience = [
  {
    id : 0,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPHU1ItkUp9c9TGvejp__8bt0L7AEunfTNqSf8m0OPAjEE-DWNQpQLciDI2cUteShjsg&usqp=CAU",
    title : "HTML",
    style : 'shadow-orange-500' 
  },
  {
    id : 1,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPHU1ItkUp9c9TGvejp__8bt0L7AEunfTNqSf8m0OPAjEE-DWNQpQLciDI2cUteShjsg&usqp=CAU",
    title : "CSS",
    style : 'shadow-blue-500' 
  },
  {
    id : 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPHU1ItkUp9c9TGvejp__8bt0L7AEunfTNqSf8m0OPAjEE-DWNQpQLciDI2cUteShjsg&usqp=CAU",
    tile : "JavaScript",
    style : 'shadow-yellow-500' 
  },
  {
    id : 3,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPHU1ItkUp9c9TGvejp__8bt0L7AEunfTNqSf8m0OPAjEE-DWNQpQLciDI2cUteShjsg&usqp=CAU",
    tile : "REACT",
    style : 'shadow-blue-600' 
  },
  {
    id : 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPHU1ItkUp9c9TGvejp__8bt0L7AEunfTNqSf8m0OPAjEE-DWNQpQLciDI2cUteShjsg&usqp=CAU",
    tile : "Tailwind",
    style : 'shadow-sky-400' 
  },
  
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

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0 text-center'>

            {
              experience.map(({id, src, title, })=>{
                return(
                  <div className='shadow-md hover:scale-105 duration-200 py-2 rounded-lg'>
                    <img className='w-full mx-auto' src={experience[0].src} alt=""/>
                    <p className='mt-4'>HTML</p>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
  </div>
  
}

export default Experience
