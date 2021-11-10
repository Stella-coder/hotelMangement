import React from "react";
import styled from "styled-components";
import { AiOutlineHome, AiFillBook } from "react-icons/ai";
import { RiHotelFill } from "react-icons/ri";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Logo</Logo>
        <NavDiv>
        <Nav to = "/">
            <Icon>
              <AiOutlineHome />
            </Icon>
          <span>Home</span> 
          </Nav> 
          <Nav to="/booking">
            <Icon>
              <AiFillBook />
            </Icon>
            <span>Booking</span>
          </Nav>
          <Nav to="/hotel">
            <Icon>
              <RiHotelFill />
            </Icon>
            <span>Hotels</span>
          </Nav>
        </NavDiv>
        <UserDiv>
        <Nav to="/signUp">
            <Icon>
              
            </Icon>
            <span>Login</span>
          </Nav>
        </UserDiv>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  width: 100%;
  /* background-color: aliceblue; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
`;
const Wrapper = styled.div`
  width: 85%;
  /* background-color: blanchedalmond; */
  display: flex;
  justify-content: space-between;
 
  
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: larger;
`;
const NavDiv = styled.div`
  display: flex;
  width: 420px;
  justify-content: space-between;
  /* background-color: chocolate; */
`;
const Nav = styled(Link)`
  width: 100px;
  height: 35px;
text-decoration: none;

  /* background-color: burlywood; */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    /* margin-left: 5px; */
    font-size: 18px;
  }
  :hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: #004080;
    cursor: pointer;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: 20px;
`;

const UserDiv = styled.div``;
