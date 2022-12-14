import imageSVG from '../../images/IMG_2330.png'
import imageSVG2 from '../../images/svg-2.svg'
import imageSVG3 from '../../images/svg-3.svg'


export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Me",
  headline: "",
  description: "Hello! My name is Nhi and I enjoy creating things that live on the internet. My interest in web development started backe in 2017 - turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
  buttonLabel: "My Resume",
  imgStart: false,
  img: imageSVG,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description: "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: imageSVG2,
  alt: 'shopping cart',
  dark: false,
  primary: false,
  darkText: true
}

export const homeObjThree = {
  id: 'signup',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description: "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: imageSVG3,
  alt: 'credit card',
  dark: true,
  primary: true,
  darkText: false
}
