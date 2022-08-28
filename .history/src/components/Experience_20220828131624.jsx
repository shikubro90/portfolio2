import React from 'react'

const experience = [
  {
    id: 0,
    src:
      'https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Apps-HTML-5-Metro-icon.png',
    title: 'HTML',
    style: 'shadow-orange-500',
  },
  {
    id: 1,
    src:
      'https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo',
    title: 'CSS',
    style: 'shadow-blue-500',
  },
  {
    id: 2,
    src:
      'https://media-exp1.licdn.com/dms/image/C4E12AQG5WavbbxI8QQ/article-cover_image-shrink_720_1280/0/1529925253756?e=1664409600&v=beta&t=WOjIEcObjh_hZfnD0SWuSlHkUUC4hjJ1k7wCvZzDb6g',
    title: 'JavaScript',
    style: 'shadow-yellow-500',
  },
  {
    id: 3,
    src:
      'https://cdn.dribbble.com/users/118986/screenshots/1221641/screen_shot_2013-09-04_at_12.13.21_am.png',
    title: 'Tailwind',
    style: 'shadow-blue-600',
  },
  {
    id: 4,
    src:
      'https://mui.com/static/logo.png',
    title: 'Ma',
    style: 'shadow-sky-400',
  },
]

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto px-4 w-full h-full text-white flex flex-col justify-center  ">
        <div>
          <div>
            <p
              className="text-4xl text-bold border-b-4 inline border-gray-500 p-2
            "
            >
              Experience
            </p>
            <p className="py-6">There are the technology i work with</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0 text-center">
            {experience.map(({ id, src, title, style }) => {
              return (
                <div
                  key={id}
                  className={`cursor-pointer shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}
                >
                  <img className="w-full mx-auto" src={src} alt="" />
                  <p className="mt-4">{title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
