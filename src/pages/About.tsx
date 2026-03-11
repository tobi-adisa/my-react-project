import React from 'react'
import { handleClick } from './Home'

const About = () => {
  return (
    <div>
      <p>About</p>
      <button onClick={handleClick}>Home</button>
    </div>
  )
}

export default About
