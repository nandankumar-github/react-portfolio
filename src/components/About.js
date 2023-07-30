import React from 'react'

const About = () => {
    return (
        <div name="about"
            className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa eligendi, accusantium necessitatibus exercitationem reiciendis sed a sint sequi ducimus dolorem alias hic praesentium? Assumenda at nostrum dolores natus id eligendi architecto ipsa odio sed veritatis. Maiores molestiae doloremque ipsa hic quasi facilis laborum deleniti, alias tempora. Minima atque eos autem?
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iste sequi beatae iure qui molestias ratione eos magni magnam ducimus aspernatur hic quaerat possimus nostrum fugit placeat distinctio ut vel repellat, rerum est sint? Repellat ipsam odit quis reiciendis blanditiis. Architecto totam doloremque porro repellendus accusamus obcaecati reprehenderit animi molestiae!
                </p>
            </div>
        </div>
    )
}

export default About