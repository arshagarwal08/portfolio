import React from 'react'
import Header from './Header'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'
import Services from './Services'
import Work from './Work'

const Home = () => {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <About />
      <Services />
      <Work />
      <Project />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
