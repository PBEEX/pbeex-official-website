import React from 'react'
import Image from 'next/image';

interface BtnProps {
    text: string;
    className?: string;
    href?: string;
    target?: string;
}

const CTA_Button = ({ text, className, href, target }: BtnProps) => {
  return (
    <div>
        {/* Call to Action Button */}
        <div className="z-10 flex">
            <a
                href={`${href}`}
                className={`${className} px-6 py-2 bg-red-500 text-white border rounded-full shadow-lg hover:scale-105 hover:gap-5 active:bg-red-600 flex items-center gap-2 transition-transform duration-500`}
                target={`${target}`} 
                rel="noopener noreferrer"
            >
                {text}
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
  )
}

export default CTA_Button
