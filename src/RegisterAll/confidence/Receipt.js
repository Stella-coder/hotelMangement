import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { app } from "../../base";

const Receipt = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  const getUserData = async (id) => {
    await app
      .firestore()
      .collection("paymentData")
      .doc(id)
      .get()
      .then((el) => {
        setUserData(el.data());
        console.log("user", userData);
      });
  };

  useEffect(() => {
    getUserData(id);
  });
  return (
    <Container>
      <Wrapper>
        <Wrapper2>
          <Name>
            <div>Payment status:</div>
            <span>{userData?.status}</span>
          </Name>
          <Name>
            <div>Total Amount Paid:</div>
            <span>Stella</span>
          </Name>

          <Name>
            <div>Reference No:</div>
            <span>Stella</span>
          </Name>
        </Wrapper2>
        <Name>
          <div>Name:</div>
          <span>Stella</span>
        </Name>
        <Name>
          <div>Email:</div>
          <span>Stella</span>
        </Name>
        <Name>
          <div>Phone No:</div>
          <span>Stella</span>
        </Name>
        <Name>
          <div>Next of Kin Name:</div>
          <span>Stella</span>
        </Name>
        <Name>
          <div>Next of Kin PhoneNo:</div>
          <span>Stella</span>
        </Name>
        <Name>
          <div>Date:</div>
          <span>Stella</span>
        </Name>
      </Wrapper>
    </Container>
  );
};

export default Receipt;

const Name = styled.div`
  display: flex;
  font-weight: bold;
  display: flex;
  justify-content: space-around;

  span {
    min-width: 300px;
    font-style: italic;
    display: flex;
    margin: 10px 0px;
    margin-left: 10px;
  }
  div {
    min-width: 300px;
    display: flex;
    margin: 10px 0px;
    margin-left: 20px;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    span {
      width: 100px;
      margin-left: 50px;
    }
    div {
      width: 100px;
      margin-left: 50px;
    }
  }
`;

const Wrapper2 = styled.div``;
const PaymentStatus = styled.div``;
const RefNo = styled.div``;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  background-color: white;
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  width: 600px;
  min-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    width: 280px;
  }
`;
