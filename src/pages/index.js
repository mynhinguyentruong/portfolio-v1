import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/InfoSection'
import Services from '../components/Services'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import SignIn from './SignIn'
import Footer from '../components/Footer'

export default function Home() {

  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      
      <Footer />
    </>
  )
}