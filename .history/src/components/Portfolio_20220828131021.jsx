import React from 'react'


    const portfolio = [
        {
            id: 1,
            src : "https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Apps-HTML-5-Metro-icon.png"
        },
        {
            id: 2,
            src : "https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo"
        },
        {
            id: 3,
            src : "https://media-exp1.licdn.com/dms/image/C4E12AQG5WavbbxI8QQ/article-cover_image-shrink_720_1280/0/1529925253756?e=1664409600&v=beta&t=WOjIEcObjh_hZfnD0SWuSlHkUUC4hjJ1k7wCvZzDb6g"
        },
        {
            id: 4,
            src : "https://www.w3schools.com/whatis/img_react.jpg"
        },
        {
            id: 5,
            src : "https://cdn.dribbble.com/users/1858541/screenshots/14532125/media/e3ef16a597cb3a1000914d7fe9d70b77.png?compress=1&resize=400x300&vertical=top"
        },
        {
            id: 6,
            src : "https://cdn.dribbble.com/users/1858541/screenshots/14532125/media/e3ef16a597cb3a1000914d7fe9d70b77.png?compress=1&resize=400x300&vertical=top"
        }
    ]

const Portfolio = () => {

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>

            <div className='pb-8 '> 
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 text-center py-8 sm:px-0'>

            {
                portfolio.map(({id, src})=>{
                    return(     
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg cursor-pointer'>
                            <img src={src} alt="" className='w-full duration-200 rounded-md hover:scale-105' />
                            <div>
                                <button className='w-1/2 px-6 py-3 duration-200'>Demo</button>
                                <button className='w-1/2 px-6 py-3 duration-200'>Code</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>

        </div>

    </div>
  )
}

export default Portfolio
