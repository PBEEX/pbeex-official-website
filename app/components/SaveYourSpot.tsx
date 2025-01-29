import React from "react";
import Image from 'next/image';
import CTA_Button from "./CTA-Button";

const SaveYourSpot: React.FC = () => {
  return (
    <section className="relative flex justify-center items-center bg-[radial-gradient(circle,rgba(255,90,90,1)_0%,rgba(16,37,57,1)_30%)] w-full h-full text-center py-20 px-4 md:px-16 lg:px-32">
      {/* Decorative elements */}
      <div className="absolute top-6 left-4 md:left-12 w-32 md:w-48 lg:w-64">
        <Image 
          src="/Edge-border-top.png" 
          alt="" 
          width={800} 
          height={200} 
          priority 
        />        
      </div>
      <div className="absolute bottom-8 right-4 md:right-12 w-32 md:w-48 lg:w-64">
        <Image 
          src="/Edge-border-bottom.png" 
          alt="" 
          width={800} 
          height={200} 
          priority 
        />     
      </div>

      {/* Decorative Icons */}
      <div className="hidden md:flex justify-between mt-12">
        <div className="absolute right-20 lg:right-40 top-10 w-16 md:w-24 lg:w-32 animate-spin-slow">
          <Image 
            src="/icon_colored.png" 
            alt="Decorative icon" 
            width={200} 
            height={200} 
            priority 
          />          
        </div>
        <div className="absolute bottom-10 left-20 lg:left-40 w-16 md:w-24 lg:w-32 animate-spin-slow">
          <Image 
            src="/icon_colored.png" 
            alt="Decorative icon" 
            width={200} 
            height={200} 
            priority 
          />   
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* Text Content */}
        <div>
        <h2 className="text-center text-5xl md:text-7xl font-rebas leading-relaxed font-medium text-white mb-8">
          SAVE YOUR SPOT <br/> AND START <br/> PREPARING TODAY
        </h2>
        </div>

        {/* Call to Action Button */}
        <CTA_Button
          text="Get Involved"
          href="/get-involved"
        />
      </div>
    </section>
  );
};

export default SaveYourSpot;
