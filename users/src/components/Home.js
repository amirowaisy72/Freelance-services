import React from 'react'
import { Slider } from './HomeComponents/Slider'
import Section from './HomeComponents/Section'
import Section2 from './HomeComponents/Section2'
import Section3 from './HomeComponents/Section3'
import Section4 from './HomeComponents/Section4'
import Section5 from './HomeComponents/Section5'

const Home = () => {
  return (
    <>
    <Slider />
    <Section />
    <Section2 />
    <Section3 />
    <br></br><br></br>
    <Section4 />
    <Section5 />
    </>
  )
}

export default Home
