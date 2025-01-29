import React from "react"; 
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue text-white py-12 px-6 lg:px-20">
      {/* Top Border */}
      <div className="border-t border-gray-700 mb-12"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
        {/* Left Section: Logo and Social Media */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 w-52">
            <Image
              src="/horizontal_white.png" 
              alt="PBEEX Logo"
              width={200}
              height={100}
              priority 
            />
          </div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/pbeex"
              className="hover:scale-110 transition-transform"
            >
              <Image 
                src="/facebook-icon.png"
                alt="facebook"
                className="transition-transform duration-300" 
                width={28} 
                height={28} 
              />
            </a>
            <a
              href="https://www.twitter.com/pbeex_official"
              className="hover:scale-110 transition-transform"
            >
              <Image 
                src="/twitter-icon.png"
                alt="twitter"
                className="transition-transform duration-300" 
                width={28} 
                height={28} 
              />
            </a>
            <a
              href="https://www.instagram.com/pbeex_official"
              className="hover:scale-110 transition-transform"
            >
              <Image 
                src="/instagram-icon.png"
                alt="instagram"
                className="transition-transform duration-300" 
                width={28} 
                height={28} 
              />
            </a>
            <a
              href="https://www.linkedin.com/company/pbeex/"
              className="hover:scale-110 transition-transform"
            >
              <Image 
                src="/linkedin-icon.png"
                alt="linkedin"
                className="transition-transform duration-300" 
                width={28} 
                height={28} 
              />
            </a>
            <a
              href="https://bit.ly/pbeex"
              className="hover:scale-110 transition-transform"
            >
              <Image 
                src="/whatsapp-icon.png"
                alt="whatsapp"
                className="transition-transform duration-300" 
                width={28} 
                height={28} 
              />
            </a>
          </div>
          <p className="text-sm">
            Stay updated about the Expo and tech 
          </p>
          <form action="mailto:profbamiroengineeringexpo@gmail.com" method="post" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-full border bg-darkblue text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandred"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-full border bg-darkblue text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandred"
                required
              />
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 rounded-full border bg-brandred text-white font-semibold hover:bg-opacity-90 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Center Section: Navigation */}
        <div className="text-center lg:justify-self-center">
        <ul className="space-y-6">
            {[
            { label: "Home", route: "/" },
            { label: "Blog", route: "/blog" },
            { label: "Projects", route: "/projects" },
            { label: "About", route: "/about" },
            { label: "Partners", route: "/partners" },
            { label: "Contact", route: "/contact" },
            ].map((item, index) => (
            <li key={index}>
                <a
                href={item.route}
                className="text-lg font-medium hover:text-brandred hover:underline transition-colors cursor-pointer"
                >
                {item.label}
                </a>
            </li>
            ))}
        </ul>
        </div>


        {/* Right Section: Event Details */}
        <div className="flex flex-col items-center lg:items-end space-y-6">
          <div className="text-center lg:text-right">
            <h2 className="text-brandred text-lg font-semibold">
              When is PBEEX 2025?
            </h2>
            <p className="text-sm">
              The date is coming soon - <br /> stay tuned for the big reveal!
            </p>
          </div>
          <Image
            src="/icon_colored.png"
            alt="PBEEEX Icon"
            width={192} 
            height={192} 
            className="opacity-40"
            priority 
          />
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-700 mt-12"></div>
    </footer>
  );
};

export default Footer;
