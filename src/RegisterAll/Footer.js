import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {
    FaGlobe,FaFacebookSquare,FaYoutubeSquare,FaInstagram, FaTwitter, FaLinkedin
} from "react-icons/fa";


let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <span>Solutions</span>
          <Section>Gift of Hotelbook</Section>
          <Section>View pricing</Section>
          <Section>Contact sales</Section>
        
        </Wrapper>
        <Wrapper>
          <span>Platform</span>
          <Section>Professional Services</Section>
          <Section>Technology index</Section>
        </Wrapper>
        <Wrapper>
          <span>Resources</span>
          <Section>Partners</Section>
        </Wrapper>
        <Wrapper>
          <span>Company</span>
          <Section>About us</Section>
          <Section>Customer stories</Section>
          <Section>Blog</Section>
        
    
        </Wrapper>
        <Wrapper>
          <span>Support</span>
          <Section>Contact</Section>
          <Section>Help center</Section>
        
    
        </Wrapper>
      </Container>

      <FooterTab>
        <Tab>
          <SocialLink>
            <Icon5/>
            <Lan>Deutsch</Lan>
            <Lan>English</Lan>
            <Lan>French</Lan>
          </SocialLink>
        </Tab>
      </FooterTab>
      <FooterTab>
        <Tab>
          <Logo src="logo3.png" />
          <Span>
Copyright © 2021 HotelBook.com All rights reserved 😊| {date} All right reserved </Span>
          <SocialLink>
            <a>
              <Icon />
            </a>
            <a>
              <Icon1 />
            </a>
            <a>
              <Icon2 />
            </a>
            <a>
              <Icon3 />
            </a>
            <a>
              <Icon4 />
            </a>
            
          </SocialLink>
        </Tab>
      </FooterTab>
    </Fragment>
  );
};

export default Footer;

const Icon = styled(FaFacebookSquare)`
font-size: 20px;
font-weight: bold;
cursor: pointer;
color: white;
`
const Icon1 = styled(FaYoutubeSquare)`
font-size: 20px;
font-weight: bold;
cursor: pointer;
color: white;
`
const Icon2 = styled(FaInstagram)`
font-size: 20px;
font-weight: bold;
cursor: pointer;
color: white;
`
const Icon5 = styled(FaGlobe)`
font-size: 20px;
font-weight: bold;
cursor: pointer;
color: white;
`
const Icon3 = styled(FaTwitter)`
font-size: 20px;
font-weight: bold;
cursor: pointer;
color: white;
`
const Icon4 = styled(FaLinkedin)`
font-size: 20px;
font-weight: bold;
cursor: pointer;
color: white;
`

const Container = styled.div`
  background-color:#387EFF;
  width: 100%;
  height: 25vh;
  display: grid;
  margin-top:50px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
color: white;

  @media screen and (max-width: 886px){
  height: 500px;
    display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
`;
const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-top: 20px;
  span {
    margin-bottom: 20px;
    text-transform: uppercase;
    &:hover {
      color: lightblue;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Lan = styled.div`
 font-size: 13px;
  font-weight: normal;
`
const Section = styled.div`
  margin-left: 20px;
  text-align: left;
  width: 100px;
  font-size: 13px;
  font-weight: normal;
  opacity: 0.5;
  margin-top: 7px;
  color: white;
  &:hover {
    cursor: pointer;
    transition: all 350ms;
    opacity: 1;
  }
`;
const FooterTab = styled.div`
  width: 100%;
  height: 70px;
  background-color: #387EFF;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: white;
 /* padding-left: 100px; */
  border-top: 1px solid gray;

  @media screen and (max-width: 886px){
 
 
}
 
`;

const Tab = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 60px;
  margin-left: 40px;
  object-fit: contain;
`;

const Span = styled.div`
  font-size: 12px;
  letter-spacing: 1.2;
  text-transform: uppercase;
  font-weight: bold;
`;
const SocialLink = styled.div`
  height: 100%;
  width: 170px;
  display: flex;
  /* margin-left: 100px; */
  justify-content: space-between;
  align-items: center;

`;
