import React from 'react'
import {styles} from '../styles'
import  Education from './Education'
import Skills from './Skills'
 
const About = () => {
  return (
    <div  id="about" className='bg-black'>
    <div className='text-center pt-[7rem]  md:mx-[9rem] lg:mx-[10rem] sm:mx-[5rem] xs:mx-[2rem]'>
      <h1 className={` ${styles.sectionHeadText} `}>Who’s Behind The Code?</h1>
      <p className={`${styles.sectionSubText}   pt-7 `}>I’m Shreya Mehra, a  MCA graduate skilled in frontend development with a focus on the MERN stack. As a fresher, I am excited to leverage my knowledge, gain real-world experience, and contribute to innovative web solutions.</p>
    </div>
    <Education />
    <Skills />
    </div>
  )
}

export default About