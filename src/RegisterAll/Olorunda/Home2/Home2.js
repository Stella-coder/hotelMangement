import React from "react";
import styled from "styled-components";
import CatogeryCard from "../CarogryCard/CatogeryCard";

const Home2 = () => {
  return (
    <Container>
      <Wrapper>
        <TitleCatg>Categories</TitleCatg>
        <CateCard>
          <CatogeryCard />
          <CatogeryCard />
          <CatogeryCard />
          <CatogeryCard />
          <CatogeryCard />
          <CatogeryCard />
        </CateCard>
      </Wrapper>
    </Container>
  );
};

export default Home2;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-flow: column wrap;
`;
const TitleCatg = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
`;
const CateCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;
