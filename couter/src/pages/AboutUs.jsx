import React from 'react'
import Hero from '../component/Hero'
import AboutSection from '../component/AboutSection'
import Section from '../component/Section'

function AboutUs() {
  return (
    <div>
      <div className='bg-[url("https://www.alnylam.com/sites/default/files/2024-12/fishing-old-man-desktop.jpg")] bg-center bg-cover w-full h-50 md:h-[500px]   text-start content-center md:pl-20 mt-20'>
      </div>
        {/* <Hero/> */}
        <AboutSection/>
        <Section/>
    </div>
  )
}

export default AboutUs