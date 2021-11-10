import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "./imgage/img.jpeg";
import img1 from "./imgage/img1.jpeg";
import img2 from "./imgage/img2.jpg";
import img3 from "./imgage/img3.jpg";
import pool from "./imgage/pool.jpg";
// import Header1 from "./Olorunda/Header/Header"
import { app } from "../base";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Rooms = () => {
  const [data, setData] = useState([]);
  const [all, setAll] = useState("");
  const [clickAll, setClickAll] = useState(true);
  const [ajegunle, setAjegunle] = useState([]);
  const [clickAjegunle, setclickAjegunle] = useState(false);
  const [apapa, setApapa] = useState([]);
  const [clickApapa, setclickApapa] = useState(false);
  const [festac, setFestac] = useState([]);
  const [clickFestac, setClickFestac] = useState(false);

  const changeAjegunle = () => {
    setclickAjegunle(true);
    setClickFestac(false);
    setClickAll(false);
    setclickApapa(false);
  };
  const changeFestac = () => {
    setclickAjegunle(false);
    setClickFestac(true);
    setClickAll(false);
    setclickApapa(false);
  };

  const changeApapa = () => {
    setclickAjegunle(false);
    setClickFestac(false);
    setClickAll(false);
    setclickApapa(true);
  };
  const changeAll = () => {
    setclickAjegunle(false);
    setClickFestac(false);
    setClickAll(true);
    setclickApapa(false);
  };

  const getAjegunle = async () => {
    await app
      .firestore()
      .collection("hotel")
      .orderBy("location")
      .startAt("Ajegunle")
      .endAt("Ajegunle")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setAjegunle(items);
        console.log("ajegunle", data);
      });
  };
  const getApapa = async () => {
    await app
      .firestore()
      .collection("hotel")
      .orderBy("location")
      .startAt("Apapa")
      .endAt("Apapa")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setApapa(items);
        console.log("apapa", data);
      });
  };
  const getFestac = async () => {
    await app
      .firestore()
      .collection("hotel")
      .orderBy("location")
      .startAt("Festac")
      .endAt("Festac")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setFestac(items);
        console.log("Festac", data);
      });
  };

  const getData = async () => {
    await app
      .firestore()
      .collection("hotel")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setData(items);
        console.log("data", data);
        // dispatch(addHotel(items));
      });
  };

  useEffect(() => {
    getData();
    getAjegunle();
    getApapa();
    getApapa();
  }, []);

  return (
    <div>
      <Container>
        <Wrapper>
          <Header>
            <Content>
              <Title>Hotel Collection</Title>
            </Content>
          </Header>
          <Head>Verified Hotels</Head>
          <SubHeadHolder>
            <Fade left>
              <SubHead>
                <span onClick={changeAll}>All</span>
                <span onClick={changeAjegunle}>Ajegunle</span>
                <span onClick={changeApapa}>Apapa</span>
                <span onClick={changeFestac}>Festac</span>
              </SubHead>
            </Fade>
          </SubHeadHolder>
          <Room>
            {clickApapa
              ? apapa?.map((props, i) => (
                  <Link to={`hotel/${props.id}`}>
                    <Card1 key={i}>
                      <Sub>
                        <Img src={props.hotelImage} />
                        <Text>
                          <Name>{props.hotelName}</Name>
                          <Location>{props.hotelDesc}</Location>
                          <div>{props.location}</div>
                        </Text>
                      </Sub>
                    </Card1>
                  </Link>
                ))
              : clickAjegunle
              ? ajegunle?.map((props, i) => (
                  <Link to={`hotel/${props.id}`}>
                    <Card1 key={i}>
                      <Sub>
                        <Img src={props.hotelImage} />
                        <Text>
                          <Name>{props.hotelName}</Name>
                          <Location>{props.hotelDesc}</Location>
                          <div>{props.location}</div>
                        </Text>
                      </Sub>
                    </Card1>
                  </Link>
                ))
              : clickFestac
              ? festac?.map((props, i) => (
                  <Link to={`hotel/${props.id}`}>
                    <Card1 key={i}>
                      <Sub>
                        <Img src={props.hotelImage} />
                        <Text>
                          <Name>{props.hotelName}</Name>
                          <Location>{props.hotelDesc}</Location>
                        </Text>
                      </Sub>
                    </Card1>
                  </Link>
                ))
              : clickAll
              ? data?.map((props, i) => (
                  <Link to={`hotel/${props.id}`}>
                    <Card1 key={i}>
                      <Sub>
                        <Img src={props.hotelImage} />
                        <Text>
                          <Name>{props.hotelName}</Name>
                          <Location>{props.hotelDesc}</Location>
                          <div>{props.location}</div>
                        </Text>
                      </Sub>
                    </Card1>
                  </Link>
                ))
              : data?.map((props, i) => (
                  <Link to={`hotel/${props.id}`}>
                    <Card1 key={i}>
                      <Sub>
                        <Img src={props.hotelImage} />
                        <Text>
                          <Name>{props.hotelName}</Name>
                          <Location>{props.hotelDesc}</Location>
                          <div>{props.location}</div>
                        </Text>
                      </Sub>
                    </Card1>
                  </Link>
                ))}
          </Room>
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
  height: 400px;
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
  height: 400px;
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
  /* background-color: blue; */
  object-fit: cover;
  position: relative;
  border-radius: 5px;
`;
const Location = styled.div`
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
  height: 300px;
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
    height: 300px;
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
