import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "./img/img.jpeg";
import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import pool from "./img/pool.jpg";
import nature from "./img/nature.jpg";
import gym from "./img/gym.jpg";
import hall from "./img/hall.jpg";

// import Header1 from "../Olorunda/Header/Header"
import { useParams, useHistory } from "react-router-dom";
import { app } from "../../base";
import { useDispatch } from "react-redux";
import { addBooking, addHotel } from "../Ebuka/ReduxGlobal";
import Fade from "react-reveal/Fade";

const Rooms = () => {
  const hist = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [facilityData, setFacilityData] = useState([]);
  const [hotelData, setHotelData] = useState([]);

  const [all, setAll] = useState("");
  const [clickAll, setClickAll] = useState(true);
  const [regular, setRegular] = useState([]);
  const [clickRegular, setClickRegular] = useState(false);
  const [standard, setStandard] = useState([]);
  const [clickStandard, setClickStandard] = useState(false);
  const [luxury, setLuxury] = useState([]);
  const [clickLuxury, setClickLuxury] = useState(false);

  const changeRegular = () => {
    setClickRegular(true);
    setClickStandard(false);
    setClickAll(false);
    setClickLuxury(false);
  };
  const changeStandard = () => {
    setClickRegular(false);
    setClickStandard(true);
    setClickAll(false);
    setClickLuxury(false);
  };
  const changeAll = () => {
    setClickRegular(false);
    setClickStandard(false);
    setClickAll(true);
    setClickLuxury(false);
  };
  const changeLuxury = () => {
    setClickRegular(false);
    setClickStandard(false);
    setClickAll(false);
    setClickLuxury(true);
  };

  const getRegular = async () => {
    await app
      .firestore()
      .collection("hotel")
      .orderBy("category")
      .startAt("Regular")
      .endAt("Regular")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setRegular(items);
        console.log("Regular", regular);
      });
  };
  const getStandard = async () => {
    await app
      .firestore()
      .collection("hotel")
      .orderBy("category")
      .startAt("Standard")
      .endAt("Standard")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setStandard(items);
        console.log("Standard", standard);
      });
  };
  const getLuxury = async () => {
    await app
      .firestore()
      .collection("hotel")
      .orderBy("category")
      .startAt("Luxury")
      .endAt("Luxury")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setLuxury(items);
        console.log("Luxury", luxury);
      });
  };

  const getData = async () => {
    await app
      .firestore()
      .collection("hotel")
      .doc(id)
      .collection("room")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setData(item);
        dispatch(addHotel(item));
        console.log("this is room", data);
      });
  };

  const getFacilityData = async () => {
    await app
      .firestore()
      .collection("hotel")
      .doc(id)
      .collection("facility")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setFacilityData(item);
        console.log("this is facility", facilityData);
      });
  };

  const getHotelData = async () => {
    await app
      .firestore()
      .collection("hotel")
      .doc(id)
      .get()
      .then((el) => {
        setHotelData(el.data());
        console.log(data);
      });
  };

  useEffect(() => {
    getData(id);
    getFacilityData(id);
    getHotelData(id);
    getStandard(id);
    getRegular(id);
    getLuxury(id);
  }, []);
  return (
    <div>
      <Container>
        <Wrapper>
          <Header>
            <Content>
              <Title>{hotelData?.hotelName}</Title>
              <span>{hotelData?.hotelDesc}</span>
            </Content>
          </Header>
          <Head>Our Ranked Rooms</Head>
          <SubHeadHolder>
            <Fade left>
              <SubHead>
                <span onClick={changeAll}>All</span>
                <span onClick={changeRegular}>Regular</span>
                <span onClick={changeStandard}>Standard</span>
                <span onClick={changeLuxury}>Luxury</span>
              </SubHead>
            </Fade>
          </SubHeadHolder>
          <Room>
            {clickRegular
              ? regular?.map((props, i) => (
                  <Card1 key={i}>
                    <Sub>
                      <Img src={img3} />
                      <Text>
                        <Name>{props.category}</Name>
                        <Price>N{props.price}/day</Price>
                        <Category>Room {props.roomNo}</Category>
                        <Button
                          onClick={() => {
                            // dispatch(addBooking(props));
                            console.log("hello");
                          }}
                        >
                          Book Now
                        </Button>
                      </Text>
                    </Sub>
                  </Card1>
                ))
              : clickStandard
              ? standard?.map((props, i) => (
                  <Card1 key={i}>
                    <Sub>
                      <Img src={img3} />
                      <Text>
                        <Name>{props.category}</Name>
                        <Price>N{props.price}/day</Price>
                        <Category>Room {props.roomNo}</Category>
                        <Button
                          onClick={() => {
                            dispatch(addBooking(props));
                          }}
                        >
                          Book Now
                        </Button>
                      </Text>
                    </Sub>
                  </Card1>
                ))
              : clickLuxury
              ? luxury?.map((props, i) => (
                  <Card1 key={i}>
                    <Sub>
                      <Img src={img3} />
                      <Text>
                        <Name>{props.category}</Name>
                        <Price>N{props.price}/day</Price>
                        <Category>Room {props.roomNo}</Category>
                        <Button
                          onClick={() => {
                            dispatch(addBooking(props));
                          }}
                        >
                          Book Now
                        </Button>
                      </Text>
                    </Sub>
                  </Card1>
                ))
              : clickAll
              ? data?.map((props, i) => (
                  <Card1 key={i}>
                    <Sub>
                      <Img src={img3} />
                      <Text>
                        <Name>{props.category}</Name>
                        <Price>N{props.price}/day</Price>
                        <Category>Room {props.roomNo}</Category>
                        <Button
                          onClick={() => {
                            dispatch(addBooking(props));
                            hist.push("/booking");
                          }}
                        >
                          Book Now
                        </Button>
                      </Text>
                    </Sub>
                  </Card1>
                ))
              : data?.map((props, i) => (
                  <Card1 key={i}>
                    <Sub>
                      <Img src={img3} />
                      <Text>
                        <Name>{props.category}</Name>
                        <Price>N{props.price}/day</Price>
                        <Category>Room {props.roomNo}</Category>
                        <Button
                          onClick={() => {
                            dispatch(addBooking(props));
                            hist.push("/booking");
                            console.log("hello");
                          }}
                        >
                          Book Now
                        </Button>
                      </Text>
                    </Sub>
                  </Card1>
                ))}
          </Room>

          <Head>Our Hotel Facilities</Head>
          <Faci>
            {facilityData?.map((props, i) => (
              <Card key={i}>
                <Sub>
                  <Image src={props.facilityImage} />
                  <Text>
                    <Name>{props.facilityName}</Name>
                    <Price>{props.price}</Price>
                    <Desc>{props.facilityDesc}</Desc>
                  </Text>
                </Sub>
              </Card>
            ))}
          </Faci>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Rooms;

const SubHeadHolder = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 64, 128, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;
const SubHead = styled.div`
  width: 700px;
  height: 100%;
  /* background-color: rgba(0, 64, 128, 0.25); */
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  span {
    cursor: pointer;
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    color: white;
    transition: all 450ms;

    &:hover {
      color: #004080;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

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
  min-height: 400px;
  height: 100%;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  min-height: 400px;
  height: 100%;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
