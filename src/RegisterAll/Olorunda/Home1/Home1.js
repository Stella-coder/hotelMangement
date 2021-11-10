import React from "react";
import styled from "styled-components";
import CardMain from "../CardMain/CardMain";
import Bounce from "react-reveal/Bounce";

const Home1 = () => {
  return (
    <Container>
      <PreWrapper>
        <BestTell>Special Offer</BestTell>
        <Wrapper>
          <Bounce bottom>
            <CardMain />
            <CardMain />
            <CardMain />
            <CardMain />
          </Bounce>
        </Wrapper>
      </PreWrapper>
    </Container>
  );
};

export default Home1;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const PreWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;

const BestTell = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
`;
