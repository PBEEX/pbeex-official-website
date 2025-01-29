import CTA_Button from '@/app/components/CTA-Button';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import React from 'react';

const GetInvolved: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <Header
          imageSrc="/get-involved-header-img.png" 
          text="Get Involved" 
          imageClass='min-h-48'
        />

        {/* Join Us Section */}
        <div className='flex flex-col lg:flex-row justify-between items-center p-6 md:px-28 font-poppins'>
          <div className='max-w-[40rem] py-6 text-darkgray'>
            <h3 className='font-semibold text-3xl py-2'>Join Us!</h3>
            <p>The Prof. O. A. Bamiro Engineering Expo &#40;PBEEX&#41; is your chance to showcase groundbreaking engineering innovations and address real-world problems with bold, solution-driven projects. This one-of-a-kind platform brings together students, innovators, and top engineering organizations to turn ideas into reality, offering resources, mentorship, and financial support. Join us to pioneer cutting-edge solutions, gain national recognition, and shape the future of engineering in Nigeria!</p>
          </div>
          <div className="flex flex-col gap-4 items-center max-w-[40rem]">
            <CTA_Button
              text="Find Student Association"
              className="text-center w-full" 
              href='https://bit.ly/pbeex'
              target='_blank'
            />
            <CTA_Button
              text="Become a Sponsor"
              className="text-center px-11 w-full" 
              href="mailto:sponsorship@pbeex.tech?subject=Become a Sponsor&body=I am interested in sponsoring PBEEX. Please provide more details."
              target='_blank'
            />
          </div>
        </div>

        {/* Solve Challenges Section */}
        <div className='p-6 md:px-28 text-darkgray'>
          <h3 className='font-semibold text-3xl py-2'>Solve Challenges</h3>
          <p>Join PBEEX to collaborate, innovate, and create engineering solutions that address pressing national and global challenges while shaping a better future.</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between p-6 md:px-28 gap-8'>
          <div className='text-darkgray flex flex-col w-full max-w-[454px] h-[600px]'>
            <div className="w-full h-[356px] overflow-hidden">
              <Image
                src="/get-involved-img-1.png"
                alt="Arrow Icon"
                className="transition-transform duration-300 object-cover w-full h-full"
                width={454}
                height={356}
                priority
              />
            </div>
            <h4 className='font-semibold text-2xl py-2'>Research Your Way to Solutions</h4>
            <p>By researching, you gain deeper insights, discover new perspectives, and develop innovative ideas. Whether you&#39;re improving a product or solving a real-world issue, research is your tool for turning ideas into impactful solutions.</p>
          </div>

          <div className='text-darkgray flex flex-col w-full max-w-[454px] h-[600px]'>
            <div className="w-full h-[356px] overflow-hidden">
              <Image
                src="/get-involved-img-2.png"
                alt="Arrow Icon"
                className="transition-transform duration-300 object-cover w-full h-full"
                width={454}
                height={356}
                priority
              />
            </div>
            <h4 className='font-semibold text-2xl py-2'>Find Solution to Problems</h4>
            <p>Problems are opportunities waiting for solutions. By researching, you equip yourself with the knowledge and tools needed to understand challenges and solve them effectively. Don&#39;t stop at identifying problems—dive deep, analyze, and create solutions that make a real difference.</p>
          </div>

          <div className='text-darkgray flex flex-col w-full max-w-[454px] h-[600px]'>
            <div className="w-full h-[356px] overflow-hidden">
              <Image
                src="/get-involved-img-3.png"
                alt="Arrow Icon"
                className="transition-transform duration-300 object-cover w-full h-full"
                width={454}
                height={356}
                priority
              />
            </div>
            <h4 className='font-semibold text-2xl py-2'>Build Problem-Solving Products</h4>
            <p>Through research and innovation, you can design solutions that address challenges and meet needs effectively. Focus on understanding the problem, exploring creative ideas, and building products that make a difference in people&#39;s lives. Start creating impactful solutions today.</p>
          </div>
        </div>

        {/* Why PBEEX Section */}
        <div className='relative w-full bg-lightgray overflow-hidden'>
          <div className='flex flex-col lg:flex-row justify-between items-center p-5 md:px-28 font-poppins gap-5'>
            <div className='max-w-[40rem] py-6 text-darkgray md:w-3/6'>
              <h3 className='font-normal text-8xl pt-2 font-rebas text-darkblue'>Why Choose <br/> PBEEX? <br/> ----------</h3>
              <p>PBEEX is designed with students at its core, providing them with a platform to showcase their innovative ideas and engineering solutions. It encourages students to apply their knowledge in practical, problem-solving projects while fostering creativity, teamwork, and a solutions-driven mindset. Through PBEEX, students gain exposure, build confidence, and connect with industry professionals, preparing them for impactful contributions to real-world challenges.</p>
            </div>
            <div className='z-10'>
              <Image
                src="/get-involved-img-4.png"
                alt="why pbeex"
                className="transition-transform duration-300 object-cover w-full h-full"
                width={454}
                height={356}
                priority
              />
            </div>
          </div>
          {/* Decorative Icons */}
          <div className="hidden md:flex justify-between mt-12">
            <div className="absolute -left-32 -top-24 w-72 h-w-72 opacity-10">
              <Image 
                src="/icon_black.png" 
                alt="Decorative icon" 
                width={400} 
                height={400} 
                priority 
              />              
            </div>
            <div className="absolute -right-32 -bottom-24 w-72 h-w-72 opacity-10">
              <Image 
                src="/icon_black.png" 
                alt="Decorative icon" 
                width={400} 
                height={400} 
                priority 
              />            
            </div>
          </div>
        </div>



        <Footer/>
    </div>
  );
};

export default GetInvolved;
