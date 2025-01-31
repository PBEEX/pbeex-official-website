import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Navbar from '@/app/components/Navbar'
import Image from "next/image";
import React from 'react'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Header
            imageSrc="/about-us-header-img.png" 
            text="About Us" 
            imageClass='min-h-48'
        />

        <section className='px-4 md:px-28 font-poppins font-medium text-darkgray'>

          {/* About Founder */}
          <div className='my-12'>
            <div className='font-rebas text-6xl pb-6'>
              <span className='border-t-4 border-brandred text-darkblue'>MEET OUR</span>
              <span className='text-brandred'> EPONYM</span>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-16'>
              <Image
                src="/eponym-img.png"
                alt="founder"
                className="object-cover"
                layout="responsive"
                width={500}
                height={500} 
                priority
              />
              <div className='text-darkgray leading-loose'>
                Prof. Olufemi Adebisi Bamiro, born on September 16, 1947, is an Emeritus Professor of Mechanical Engineering at the University of Ibadan. A former Vice Chancellor and current Dean of the Faculty of Technology, he graduated with First Class Honours in 1971 and earned his PhD from McGill University in 1975. As the first professor in the university&#39;s Mechanical Engineering department, he has made significant contributions to academia and society. <br/>
                Prof. Bamiro has received prestigious awards, including the Nigerian Society of Engineers Merit Award, UN-Habitat Best Practice Award, and fellowships with the Nigerian Society of Engineers and Nigerian Academy of Engineering. Renowned for his impactful work, he is also a dedicated family man. <br/>
                The Prof. O. A. Bamiro Engineering Expo &#40;PBEEX&#41; is a groundbreaking initiative that brings together engineering and technology students from tertiary institutions across Nigeria. This annual event is designed to foster innovation, research, and the development of ambitious engineering projects that address real-world challenges, inspire creativity, and drive technological advancements.
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className='my-12'>
            <div className='font-rebas text-6xl pb-6'>
              <span className='border-t-4 border-brandred text-darkblue'>WHAT&#39;S OUR</span>
              <span className='text-brandred'> MISSION</span>
              <span className='text-darkblue'>?</span>
            </div>
            <div>To inspire Nigerian engineering students to develop and execute innovative projects that solve national and global challenges while fostering a culture of creativity, research, and leadership in engineering.</div>
          </div>

          {/* Our Goals */}
          <div className='py-6 overflow-hidden'>
            <div className='font-rebas text-6xl pb-6'>
              <span className='border-t-4 border-brandred text-darkblue'>OUR</span>
              <span className='text-brandred'> GOALS</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6 w-full min-h-96">
              <div className="bg-darkblue flex flex-col rounded-xl py-6 px-6 h-96 md:h-48 w-full md:w-[30%] hover:h-96 transition-all ease-out duration-700">
                <h1 className="font-rebas text-brandred text-6xl pb-2">01</h1>
                <h4 className="text-white text-2xl font-normal">Need for Innovation-Driven and Research Focused Education</h4>
                <p className="text-white text-1xl font-light my-6">Innovation-driven and research-focused education equips learners with critical thinking and problem-solving skills to address real-world challenges and drive societal progress.</p>
              </div>
              <div className="bg-darkblue flex flex-col rounded-xl py-6 px-6 h-96 md:h-48  w-full md:w-[30%] hover:h-96 transition-all ease-out duration-700">
                <h1 className="font-rebas text-brandred text-6xl pb-2">02</h1>
                <h4 className="text-white text-2xl font-normal">Solve Real World Engineering Challenges</h4>
                <p className="text-white text-1xl font-light my-10">Solving real-world engineering challenges that demands innovative solutions to advance technology and meet societal needs.</p>
              </div>
              <div className="bg-darkblue flex flex-col rounded-xl py-6 px-6 h-96 md:h-48  w-full md:w-[30%] hover:h-96 transition-all ease-out duration-700">
                <h1 className="font-rebas text-brandred text-6xl pb-2">03</h1>
                <h4 className="text-white text-2xl font-normal">Industry Exposure and Job Opportunities</h4>
                <p className="text-white text-1xl font-light my-10">Providing industry exposure and creating job opportunities to equip students with practical skills and drive career growth.</p>
              </div>
            </div>
          </div>

          <div className='relative my-12'>
            <div className='pb-6'> <span className='text-brandred'>PBEEX</span> is more than an event—it&#39;s a movement to transform engineering education in Nigeria. Join our community to support groundbreaking innovations or sponsor this visionary project. Together, we can empower the next generation of Nigerian engineers to change the world.</div>
            <a
              href="/get-involved"
              className="absolute right-0 -bottom-6 px-6 py-3 bg-red-500 text-1xl text-white border rounded-xl shadow-lg hover:scale-105 active:bg-red-600 transition-transform duration-500"
            >Get Involved</a>
          </div>
          
          

        </section>
    
        <Footer/>
    </div>
  )
}

export default About
