import React from "react";
import styled from "styled-components";
import catImg from "../Images/gff.jpg";
import { BiHotel } from "react-icons/bi";

const CatogeryCard = () => {
  return (
    <MiniCard>
      <MCIcon>
        <BiHotel />
      </MCIcon>
      <McCategory>Regular</McCategory>
    </MiniCard>
  );
};

export default CatogeryCard;

const MiniCard = styled.div`
  height: 150px;
  width: 150px;
  /* background-color: rosybrown; */
  background-image: url(${catImg});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 10px;
  @media screen and (max-width: 800px) {
    margin: 10px;
  }
`;
const MCIcon = styled.div`
  font-size: 35px;
  color: #fff;
`;
const McCategory = styled.div`
  font-size: 22px;
  color: #fff;
`;
