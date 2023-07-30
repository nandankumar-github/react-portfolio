import React from 'react'
import Python from '../assets/portfolio/Python.png'
import Django from '../assets/portfolio/django.jpg'
import JavaScript from '../assets/portfolio/JavaScript.jpg'
import AWS from '../assets/portfolio/aws.png'
import Github from '../assets/portfolio/github.png'
import ReactJpg from '../assets/portfolio/react.jpg'
import TailwindJpg from '../assets/portfolio/tailwind.jpg'



const Experience = () => {

    const technologies = [
        {
            id: 1,
            src: Python,
            title: 'Python',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: Django,
            title: 'Django',
            style: 'shadow-blue-500'

        },
        {
            id: 3,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'

        }, {
            id: 4,
            src: AWS,
            title: 'AWS',
            style: 'shadow-orange-500'

        }, {
            id: 5,
            src: Github,
            title: 'Github',
            style: 'shadow-orange-500'


        },
        {
            id: 6,
            src: ReactJpg,
            title: 'React Js',
            style: 'shadow-blue-600'


        },
        {
            id: 7,
            src: TailwindJpg,
            title: 'Tailwind',
            style: 'shadow-gray-400'
        }
    ]
    return (
        <div name="experience"
            className='bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white'
        >

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>

                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-48'>

                {
                    technologies.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>


        </div >
    )
}

export default Experience