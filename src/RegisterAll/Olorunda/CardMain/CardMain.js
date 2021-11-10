import React from "react";
import styled from "styled-components";
import cardImg from "../Images/luxx.jpg";

const CardMain = () => {
  return (
    <CardMainDiv>
      <SubCard>
        <FirstText>Ajegunle, Lagos</FirstText>
        <ImageCont src={cardImg} alt="Img" />
        <HotelName>J5 Hotel & Suits</HotelName>
        <HotelDesc>
          Mobile app development is the act or process by which a mobile app is
          developed for mobile
        </HotelDesc>
        <PriceDiv>$122.34</PriceDiv>
        <CardBtnDiv>View All Rooms</CardBtnDiv>
      </SubCard>
    </CardMainDiv>
  );
};

export default CardMain;

// const Container = styled.div`
//   height: 350px;
//   width: 300px;
//   background-color: rosybrown;
//   border-radius: 8px;
// `;
// const Wrapper = styled.div``;

const CardMainDiv = styled.div`
  /* height: 400px; */
  width: 260px;
  /* background-color: #272727; */
  /* margin: 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  @media screen and (max-width: 800px) {
    margin: 12px 0;
  }
`;
const SubCard = styled.div`
  width: 255px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const FirstText = styled.div`
  font-weight: 300;
  color: #22ace9;
  padding: 5px;
`;

const ImageCont = styled.img`
  width: 245px;
  height: 170px;
  object-fit: cover;
  background-color: black;
`;

const HotelName = styled.div`
  font-size: 18px;
  font-weight: 200;
  /* color: #cfcfcf; */
  color: #000;
  padding: 5px;
`;

const HotelDesc = styled.div`
  font-size: 15px;
  /* color: #cfcfcf; */
  color: #000;
  text-align: center;
  padding: 5px;
  font-family: Montserrat;
`;

const PriceDiv = styled.div`
  font-weight: 400;
  font-size: 22px;
  color: #22ace9;
  padding: 5px;
`;

const CardBtnDiv = styled.button`
  height: 34px;
  width: 150px;
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
