import React from 'react'

import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img} from './InfoElements'
import { Button } from '../ButtonElement'


export default function Info({buttonLabel, lightText, imgStart, lightBg, id, topLine, headline, darkText, description, img, alt }) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home">{buttonLabel}</Button>
                </BtnWrap> 
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}