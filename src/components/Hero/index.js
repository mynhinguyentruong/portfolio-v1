import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'

export default function Hero() {
  const [hover, setHover] = React.useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroP>Hi, Xin chao! 👋 My name is</HeroP>
        <HeroH1>Nhi Nguyen.</HeroH1>
        <HeroH1>I build things for the web.</HeroH1>
        <HeroP>
          I'm a frontend developer based in Toronto, Ontario specializing in building (and occasionally designing) exceptional, high-quality websites and applications.
        </HeroP>
        <HeroBtnWrapper>
          <Button 
            to='signup' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            >
            Get In Touch {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}