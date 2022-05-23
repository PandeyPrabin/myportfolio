import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import './about.css'

function About() {
  return (
    <div className='about'>
        <div className='about-top'> 
            <div className='about-info'>
                Hello there, I'm 
                <br /><span className='info-name'>Prabin Pandey</span>. 
                <br />This is my portfolio.
            </div>
            <div className='about-photo'>
                <img src={require('../../../assets/coding.png').default} className='picture' />
            </div>
        </div>
        <div className='about-bottom'>

        </div>
        </div>
  )
}

export default About