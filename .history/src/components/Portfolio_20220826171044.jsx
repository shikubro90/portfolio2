import React from 'react'

const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>

            <div className='pb-8 '> 
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div >
                    <img src="https://cdn.dribbble.com/users/1858541/screenshots/14532125/media/e3ef16a597cb3a1000914d7fe9d70b77.png?compress=1&resize=400x300&vertical=top" alt="" className='duration-200 rounded-md hover:scale-105' />
                    <div>
                        <button className='w-1/2 px-6 py-'>Demo</button>
                        <button className='w-1/2 px-6 py-'>Code</button>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <button>Demo</button>
                        <button>Code</button>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <button>Demo</button>
                        <button>Code</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Portfolio
