import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin,FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink } from './FooterElements'

export default function Footer() {
  return (
    <FooterContainer>
   
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to = '/'>Nhi Nguyen</SocialLogo>
            <WebsiteRights> © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
  
    </FooterContainer>
  )
}
