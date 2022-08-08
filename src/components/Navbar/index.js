import React, { useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import { animateScroll as scroll } from 'react-scroll/modules'

import { 
  Nav, NavbarContainer, 
  NavLogo, 
  MobileIcon,
  NavMenu, 
  NavItem, 
  NavLinks, 
  NavBtn, 
  NavBtnLink 
} from './NavbarElements'

export default function Navbar({ toggle }) {

  const [scrollNav, setScrollNav] = React.useState(false)

  function changeNav() {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else setScrollNav(false)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeNav)

  },[])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Nhi Nguyen</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to="about" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact="true" 
                >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact="true">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact="true">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact="true">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='./signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}