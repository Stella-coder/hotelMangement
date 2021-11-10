import React from "react";
import styled from "styled-components";
import bgimg from "../Images/hotp.png";
// import bgimg from "../Images/perm.jpg";
import Bounce from "react-reveal/Bounce";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <HeroTitle>
          <Bounce right cascade>
            The Luxury Room Of Your Choice Is Right For You
          </Bounce>
        </HeroTitle>
        <HeroBtn>
          <BtnDiv>Sign Up</BtnDiv>
          <BtnDiv>Book Now</BtnDiv>
        </HeroBtn>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: chocolate; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 500px;
  /* background-color: gold; */
  background-image: url(${bgimg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.div`
  max-width: 500px;
  /* background-color: rosybrown; */
  font-size: 55px;
  color: #fff;
  text-align: center;
`;
const HeroBtn = styled.div`
  max-width: 280px;
  margin: 20px;
`;
const BtnDiv = styled.button`
  height: 34px;
  width: 120px;
  background-color: #377dff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: Montserrat;
  transition: all 350ms;
  transform: scale(1);
  margin: 0 10px;

  :hover {
    transform: scale(0.94);
  }
`;
