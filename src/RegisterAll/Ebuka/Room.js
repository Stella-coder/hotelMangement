import React from "react";
import styled from "styled-components";
import img from "./img.jpeg";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import pool from "./pool.jpg";
import nature from "./nature.jpg";
import gym from "./gym.jpg";
import hall from "./hall.jpg";
import { useDispatch } from "react-redux";
import { addBookings } from "./ReduxGlobal";
import Fade from "react-reveal";

const Rooms = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Header>
          <Content>
            <Title>Bana Hotel and Suits</Title>
            <span>
              Book Your Stay with us today, to enjoy comfort and luxury
            </span>
          </Content>
        </Header>
        <Head>Our Ranked Rooms</Head>
        <Room>
          <Card1>
            <Sub>
              <Img src={img} />
              <Text>
                <Name>Mini Sweet</Name>
                <Price>N50,000/day</Price>
                <Category>Luxury</Category>
                <Button
                  onClick={() => {
                    dispatch(addBookings(props));
                  }}
                >
                  Book Now
                </Button>
              </Text>
            </Sub>
          </Card1>

          <Card1>
            <Sub>
              <Img src={img1} />
              <Text>
                <Name>Mini Sweet</Name>
                <Price>N50,000/day</Price>
                <Category>Luxury</Category>
                <Button>Book Now</Button>
              </Text>
            </Sub>
          </Card1>

          <Card1>
            <Sub>
              <Img src={img2} />
              <Text>
                <Name>Mini Sweet</Name>
                <Price>N50,000/day</Price>
                <Category>Luxury</Category>
                <Button>Book Now</Button>
              </Text>
            </Sub>
          </Card1>

          <Card1>
            <Sub>
              <Img src={img3} />
              <Text>
                <Name>Mini Sweet</Name>
                <Price>N50,000/day</Price>
                <Category>Luxury</Category>
                <Button>Book Now</Button>
              </Text>
            </Sub>
          </Card1>
        </Room>

        <Head>Our Hotel Facilities</Head>
        <Faci>
          <Card>
            <Sub>
              <Image src={hall} />
              <Text>
                <Name>Event Hall</Name>
                <Price>N150,000</Price>
                <Desc>Standard Event Center</Desc>
              </Text>
            </Sub>
          </Card>
          <Card>
            <Sub>
              <Image src={gym} />
              <Text>
                <Name>Gym</Name>
                <Price>N20,000/month</Price>
                <Desc>Standard Gym facilities</Desc>
              </Text>
            </Sub>
          </Card>
          <Card>
            <Sub>
              <Image src={pool} />
              <Text>
                <Name>Luxury Pool</Name>
                <Price>N5,000</Price>
                <Desc>luxury pool standard</Desc>
              </Text>
            </Sub>
          </Card>
          <Card>
            <Image src={nature} />
            <Text>
              <Name>Nature House</Name>
              <Price>N50,000/Night</Price>
              <Desc>
                our nature house get away facility is surrounded by all things
                nature
              </Desc>
            </Text>
          </Card>
        </Faci>
      </Wrapper>
    </Container>
  );
};

export default Rooms;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 3px;
  color: white;
  background-color: #004080;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 10px;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
    transform: scale all(0.9);
  }
`;

const Room = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: center;
  width: 95%;
  justify-content: space-around;
`;
const Head = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 30px;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-left: 30px;
`;
const Card = styled.div`
  width: 280px;
  height: 400px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  :after {
    content: "";
    top: 0;
    width: 100%;
    /* height: 406px; */
    background-color: rgba(0, 0, 0, 0.718);
    position: absolute;
    z-index: -2;
  }
  &:hover {
    transition: all 350ms;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media screen and (max-width: 1224px) {
    margin-top: 70px;
  }
`;
const Card1 = styled.div`
  width: 280px;
  height: 400px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  :after {
    content: "";
    top: 0;
    width: 100%;
    /* height: 406px; */
    background-color: rgba(0, 0, 0, 0.718);
    position: absolute;
    z-index: -2;
  }
  &:hover {
    transition: all 350ms;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media screen and (max-width: 1224px) {
    margin-top: 70px;
  }
`;
const Sub = styled.div``;
const Faci = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  background-color: blue;
  object-fit: cover;
  position: relative;
  border-radius: 5px;
`;
const Img = styled.img`
  width: 100%;
  height: 250px;
  background-color: blue;
  object-fit: cover;
  position: relative;
  border-radius: 5px;
`;
const Price = styled.div`
  color: black;
  font-size: 15px;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-left: 20px;
  margin-bottom: 5px;
`;
const Text = styled.div`
  position: absolute;
  width: 280px;
  padding-top: 10px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Desc = styled.div`
  color: black;
  font-size: 13px;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-left: 20px;
`;
const Category = styled.div`
  color: black;
  font-size: 13px;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-left: 20px;
`;
const Name = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-left: 20px;
`;

const Header = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  background: url(${pool});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: -1;
  :after {
    content: "";
    top: 0;
    width: 100%;
    height: 450px;
    background-color: rgba(0, 0, 0, 0.718);
    position: absolute;
    z-index: -2;
  }
  /* background-color: green; */
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;
const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  min-height: 120vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 170px;
  font-size: 60px;
  color: #fff;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 25px;
    font-weight: 700;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 450px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  span {
    width: 60%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    margin-top: 10px;
    @media (min-width: 320px) and (max-width: 1024px) {
      font-size: 15px;
      font-weight: 500;
      width: 90%;
      margin-bottom: 20px;
    }
  }
`;
