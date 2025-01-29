import Image from 'next/image';

interface HeaderProps {
  imageSrc: string;
  text: string;
  imageClass?: string;
}

const Header = ({ imageSrc, text, imageClass }: HeaderProps) => {
  return (
    <header className="relative w-full flex font-rebas justify-center items-center">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Header Background"
        className={`w-full ${imageClass} h-auto object-cover`}
        width={1920} 
        height={1080} 
        priority
      />
      {/* Overlaying Text */}
      <h1 className="absolute text-4xl md:text-5xl lg:text-7xl font-rebas text-center text-white uppercase">
        {text}
      </h1>
    </header>
  );
};

export default Header;
