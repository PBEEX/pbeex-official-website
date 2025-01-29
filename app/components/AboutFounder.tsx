"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Slideshow = () => {
  const images = [
    { src: "/founder-1.png", alt: "Founder 1" },
    { src: "/gallery-image-10.jpg", alt: "Founder 2" },
    { src: "/gallery-image-11.jpg", alt: "Founder 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsVisible(true); // Fade in
      }, 500); // Duration of fade out
    }, 3000); // Duration of each slide

    return () => clearInterval(interval); // Cleanup
  }, [images.length]);

  return (
    <div className="relative w-[500px] h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className={`object-cover transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};

const AboutFounder = () => {
  return (
    <div className="my-10">
      <div className="font-rebas text-6xl pb-6">
        <span className="border-t-4 border-brandred text-darkblue">MEET OUR</span>
        <span className="text-brandred"> FOUNDER</span>
      </div>
      <div className="flex justify-center items-center gap-16">
        <Slideshow />
        <div className="text-darkgray leading-loose">
          Prof. Olufemi Adebisi Bamiro, born on September 16, 1947, is an Emeritus Professor of Mechanical Engineering at the University of Ibadan. A former Vice Chancellor and current Dean of the Faculty of Technology, he graduated with First Class Honours in 1971 and earned his PhD from McGill University in 1975. As the first professor in the university&#39;s Mechanical Engineering department, he has made significant contributions to academia and society. <br />
          Prof. Bamiro has received prestigious awards, including the Nigerian Society of Engineers Merit Award, UN-Habitat Best Practice Award, and fellowships with the Nigerian Society of Engineers and Nigerian Academy of Engineering. Renowned for his impactful work, he is also a dedicated family man.
        </div>
      </div>
      <div className="pt-4">
        The Prof. O. A. Bamiro Engineering Expo &#40;PBEEX&#41; is a groundbreaking initiative that brings together engineering and technology students from tertiary institutions across Nigeria. This annual event is designed to foster innovation, research, and the development of ambitious engineering projects that address real-world challenges, inspire creativity, and drive technological advancements.
      </div>
    </div>
  );
};

export default AboutFounder;
