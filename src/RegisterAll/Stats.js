import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ChartRace from "react-chart-race";
import { AuthContext } from "./AuthState";
import { app } from "../base";

const Stats = () => {
  const { currentUser } = useContext(AuthContext);
  const [fetchData, setfetchData] = useState([]);

  const getData = async () => {
    await app
      .firestore()
      .collection("hotel")
      .doc(currentUser.uid)
      .collection("room")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setfetchData(item);
        console.log(fetchData);
      });
  };

  const data = [
    fetchData,
    // {
    //   id: 0,
    //   title: "Ayfonkarahisar",
    //   value: fetchData.length,
    //   color: "#50c4fe",
    // },
    // { id: 1, title: "Kayseri", value: 38, color: "#3fc42d" },
    // {
    //   id: 2,
    //   title: "Muğla",
    //   value: 39,
    //   color: "#c33178",
    // },
    // {
    //   id: 3,
    //   title: "Uşak",
    //   value: 45,
    //   color: "#423bce",
    // },
    // { id: 4, title: "Sivas", value: 58, color: "#c8303b" },
    // { id: 5, title: "Konya", value: 16, color: "#2c2c2c" },
  ];
  return (
    <Container>
      <ChartRace
        data={data}
        backgroundColor="#000"
        width={760}
        padding={12}
        itemHeight={58}
        gap={12}
        titleStyle={{ font: "normal 400 13px Arial", color: "#fff" }}
        valueStyle={{
          font: "normal 400 11px Arial",
          color: "rgba(255,255,255, 0.42)",
        }}
      />
      <Wrapper> </Wrapper>
    </Container>
  );
};

export default Stats;

const Container = styled.div``;
const Wrapper = styled.div``;
