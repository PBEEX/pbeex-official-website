import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <div>
        <Navbar/>
    
        <Header
            imageSrc="/projects-header-img.png" 
            text="Coming soon..." 
            // imageClass='min-h-dvh'
        />
        <Footer/>
    </div>
  )
}

export default Contact
