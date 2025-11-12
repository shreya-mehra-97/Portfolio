import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar, About, Contact, Hero, Projects, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'
        style={{
          background: "linear-gradient(135deg, rgb(107 36 74), rgb(48, 43, 99), rgb(36, 36, 62))",
        }}
      >
        <div >
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='relative z-0'>
          <Projects />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App