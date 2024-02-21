import React from 'react'
import Skills from '../../components/Skills'
import Portfolio from '../../components/Portfolio'
import Testimonial from '../../components/Testimonial'
import About from '../../components/About'
import Hero from '../../components/Hero'

const page = () => {
  return (
    <div>
      <>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Testimonial/>
      </>
    </div>
  )
}

export default page
