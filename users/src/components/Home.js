import React from 'react'
import { Slider } from './HomeComponents/Slider'
import Section from './HomeComponents/Section'
import Section2 from './HomeComponents/Section2'
import Section3 from './HomeComponents/Section3'
import Section4 from './HomeComponents/Section4'
import Section5 from './HomeComponents/Section5'
import Contact from './Contact'
import Features from './HomeComponents/Features'
import Services from './HomeComponents/Services'
import Portfolio from './HomeComponents/Portfolio'
import SecurePayments from './HomeComponents/SecurePayments'

const Home = () => {
  return (
    <>
    <Section />
    <Section2 />
    <Services />
    <Portfolio />
    <Features />
    <Section5 />
    <Contact />
    <SecurePayments />
    </>
  )
}

export default Home
