import React from 'react'
import Skills from '../../components/Skills'
import Portifolio from '../../components/Portifolio'
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
      <Portifolio/>
      <Testimonial/>
      </>
    </div>
  )
}

export default page
