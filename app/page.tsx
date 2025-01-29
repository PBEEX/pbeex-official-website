import FAQSection from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Slideshow from "@/app/components/ImageGallery";
import Navbar from "@/app/components/Navbar";
// import PartnersSection from "@/components/Partners";
import SaveYourSpot from "@/app/components/SaveYourSpot";
import WhatIsPbeex from "@/app/components/WhatIsPbeex";
import WhatToExpect from "@/app/components/WhatToExpect";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <PartnersSection/> */}
      <WhatIsPbeex />
      <WhatToExpect />
      <Slideshow />
      <SaveYourSpot />
      <FAQSection />
      <Footer />
    </div>
  );
}