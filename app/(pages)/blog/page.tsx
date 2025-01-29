import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <Header
            imageSrc="/projects-header-img.png" 
            text="Coming soon..." 
        />
        <Footer/>
    </div>
  )
}

export default Blog
