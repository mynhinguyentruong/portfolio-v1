import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'

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
    </>
  )
}