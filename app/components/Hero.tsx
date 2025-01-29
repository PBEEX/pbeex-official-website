import React from 'react';
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen m-0 px-6 md:px-12 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
            src="/hero-img.svg"
            alt="Engineer in construction gear"
            className="w-full h-full object-cover"
            width={1000}
            height={500} 
            priority 
        />
        </div>

        {/* Gradient Overlay */}
        <div
        className="absolute inset-0 -z-10 w-full h-full"
        style={{
        background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(16,37,57,1) 60%)",
        }} />
        
        {/* Content Section */}
        <div className="relative w-full md:w-3/5 lg:w-2/5 flex flex-col items-center justify-center text-white z-10 lg:pb-16 lg:translate-x-96">
            {/* Bulb Icon */}
            <div className="absolute -top-10 -left-32 lg:-left-40 hover:scale-100 animate-pulse">
                <Image
                    src="/bulb-icon.svg"
                    alt="Bulb Icon"
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
                    width={100} 
                    height={100} 
                />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-rebas text-center leading-snug lg:leading-custom w-full lg:text-left uppercase">
                SOLVE PRESSING REAL-WORLD PROBLEMS AND TACKLE KEY CHALLENGES HOLDING BACK NIGERIAN ENGINEERING STUDENTS.  
            </h1>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                <a href="/about" className="px-6 py-2 text-white border rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    Learn More
                </a>
                {/* Call to Action Button */}
                <div className="z-10 flex">
                    <a
                        href="/get-involved"
                        className="px-6 py-2 bg-red-500 text-white border rounded-full shadow-lg hover:scale-105 hover:gap-5 active:bg-red-600 flex items-center gap-2 transition-transform duration-500"
                    >
                        Get Involved
                        <span className="w-8 items-center">
                            <Image 
                                src="/arrow-up-right.png" 
                                alt="Arrow Icon" 
                                className="transition-transform duration-300" 
                                width={50} 
                                height={50} 
                                priority 
                            />                
                        </span>
                    </a>
                </div>
            </div>

            {/* Vector Icon */}
            <div className="hidden md:flex absolute -bottom-10 right-1 lg:bottom-0">
                <Image
                    src="/Vector-icon.svg" 
                    alt="Vector Icon"
                    className="w-12 h-12 md:w-16 md:h-16"
                    width={64} 
                    height={64} 
                />
            </div>
        </div>

    </section>
  )
}

export default Hero;
