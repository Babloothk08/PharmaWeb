import React from 'react'
import Hero from '../component/Hero'
import Main from '../component/Main'
import AboutSection from '../component/AboutSection'
import MiddleBottom from '../component/MiddleBottom'
import Innovations from '../component/Innovations'
import Section from '../component/Section'
import VideoContent from '../component/VideoContent'

function Home() {
  return (
    <div>
      <Hero/>
      <Main/>
       
       <VideoContent/>
       <Innovations/>
      <MiddleBottom/>
     <Section/>
    </div>
  )
}

export default Home