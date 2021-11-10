import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import img1 from 'images/back.jpg'
import background from "./back.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  addHotel,
  addBooking,
  changeDays,
  removeBooking,
  totalState,
} from "./ReduxGlobal";
import { useHistory } from "react-router-dom";

const Booking = () => {
  const hist = useHistory();
  const data = useSelector((state) => state.myReducer.bookings);
  const totalCostState = useSelector((state) => state.myReducer.totalRoomCost);
  const days = useSelector((state) => state.myReducer.totalRoomDays);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(totalCostState);
  console.log(totalCostState);
  useEffect(() => {
    dispatch(totalState());
  }, [data]);
  return (
    <Container>
      <Wrapper>
        {data.map((props, i) => (
          <Card key={i}>
            <ImageTop src={props.roomImage} />
            <RoomPlace>
              <Work>Room NO:</Work>
              <Work2>
                <span>{props.roomNo}</span>
              </Work2>
            </RoomPlace>

            <PricePlace>
              <Work>Price:</Work>
              <Work2>
                <span>{props.price * props.days}</span>
              </Work2>
            </PricePlace>
            <Category1>
              <Work>Category:</Work>
              <Work2>
                <span>{props.category}</span>
              </Work2>
            </Category1>

            <Days>
              <Mus
                onClick={() => {
                  dispatch(changeDays(props));
                }}
              >
                -
              </Mus>
              <DayNum>
                <div>No of Days</div>
                <div>{props.days}</div>
              </DayNum>
              <span>{props.QTY}</span>
              <Add
                onClick={() => {
                  dispatch(addBooking(props));
                }}
              >
                +
              </Add>
            </Days>

            <ButtonPart>
              <ButtonPP
                onClick={() => {
                  dispatch(removeBooking(props));
                }}
              >
                Cancel
              </ButtonPP>
              <ButtonC>View</ButtonC>
            </ButtonPart>
          </Card>
        ))}
        <HoldTotal>
          {" "}
          <TotalAll>
            <Total>
              <span>Total Price</span>
              <div>#{totalCostState}</div>
            </Total>
            <Total>
              <span>Total Days</span>
              <div>{days}</div>
            </Total>
            <ButtonPay
              onClick={() => {
                hist.push("/form");
              }}
            >
              Proceed to Payment
            </ButtonPay>
          </TotalAll>
        </HoldTotal>
      </Wrapper>
    </Container>
  );
};

export default Booking;
const ButtonPay = styled.div`
  width: 150px;
  height: 40px;
  background-color: #004080;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  margin: 0px 5px;
  cursor: pointer;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;
const HoldTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  border-radius: 5px;
`;
const TotalAll = styled.div`
  min-width: 300px;
  width: 600px;
  min-height: 80px;
  height: 100%;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.25);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  text-align: center;
`;
const Total = styled.div`
  div {
    color: #004080;
  }
`;

const Category1 = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin: 10px;
  font-weight: bold;
`;
const PricePlace = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin: 10px;
  font-weight: bold;
`;
const Work2 = styled.div`
  margin-right: 10px;
`;
const Work = styled.div`
  margin-left: 10px;
`;
const RoomPlace = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin: 10px;
  font-weight: bold;
`;
const ButtonC = styled.div`
  width: 150px;
  height: 40px;
  background-color: red;
  color: white;
  margin: 0px 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  @media screen and (max-width: 475px) and (min-width: 320px) {
    margin-left: 0;
  }

  @media screen and (max-width: 700px) and (min-width: 320px) {
    font-size: 10px;
    width: 80px;
    height: 30px;
  }
`;
const ButtonPP = styled.div`
  width: 150px;
  height: 40px;
  background-color: #004080;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  margin: 0px 5px;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  @media screen and (max-width: 700px) and (min-width: 320px) {
    width: 350px;
  }

  @media screen and (max-width: 475px) and (min-width: 320px) {
    font-size: 10px;
    width: 100px;
    height: 30px;
    margin: 0px 5px;
  }
`;
const ButtonPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 475px) and (min-width: 320px) {
    margin-bottom: 10px;
  }
`;
const Location = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  color: white;
  font-weight: bold;
`;
const Category = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  color: white;
  font-weight: bold;

  span {
    color: black;
  }
`;
const Price = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  color: blue;
  font-weight: bold;
  color: white;

  span {
    color: black;
  }
`;
const LastContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;

  span {
    color: black;
  }

  @media screen and (max-width: 475px) and (min-width: 320px) {
    font-size: 13px;
  }
`;
const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const Add = styled.div`
  margin: 0px 15px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #004080;
  border-radius: 50%;
  font-size: 15px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 475px) and (min-width: 320px) {
    margin: 0px 10px;
  }
`;
const DayNum = styled.div`
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
`;
const Mus = styled.div`
  margin: 0px 15px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 50%;
  font-size: 15px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 475px) and (min-width: 320px) {
    margin: 0px 10px;
  }
`;
const Days = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0px;
`;
const Dec = styled.div`
  /* background-color: blue; */
  font-size: 15px;
  font-weight: bold;
`;
const RoomNO = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;

  span {
    margin: 0px 10px;
    color: white;
  }
`;
const MobileTop = styled.div`
  display: none;
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    width: 30vw;
    height: 30vh;
    margin-top: -200px;
    justify-content: center;
  }
`;
const MobileCard = styled.div`
  display: none;
  @media screen and (min-width: 320px) and (max-width: 475px) {
    display: flex;
    margin-top: 150px;
    margin-bottom: -30px;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url(${background});
  background-position: center;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  position: relative;

  :after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -5;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 280px;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  margin: 10px;
  /* backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px ); */
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (max-width: 1440px) and (min-width: 320px) {
    height: auto;
    width: 250px;
  }

  /* @media screen and (max-width: 700px) and (min-width: 320px) {
    display: flex;
    justify-content: center;
    width: 70%;
  } */
`;
const ImageTop = styled.img`
  width: 100%;
  height: 50%;
  background-color: black;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  /* img{
        width: 100%;
        height: 100%;
    } */
  /* 
  @media screen and (max-width: 700px) and (min-width: 320px) {
    width: 90%;
    height: 50%;
  } */
`;
const RightPart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  input {
    width: 80%;
    height: 30px;
    border-radius: 3px;
    margin-top: 30px;
    margin-left: 40px;
    border: none;
    padding: 10px;

    @media screen and (max-width: 475px) and (min-width: 320px) {
      width: 90%;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 475px) and (min-width: 320px) {
    width: 100%;
    align-items: center;
  }
`;
const BigWord = styled.div`
  font-size: 26px;
  font-family: poppins;
  font-weight: 500;
  text-align: center;
  color: white;
`;
const SmallWordS = styled.div`
  font-size: 15px;
  font-family: poppins;
  text-align: center;
  color: white;
  width: 80%;
  margin-left: 30px;

  @media screen and (max-width: 475px) and (min-width: 320px) {
    display: none;
  }
`;
const Button = styled.div`
  width: 150px;
  height: 40px;
  background-color: #004080;
  color: white;
  margin-left: 130px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: 475px) and (min-width: 320px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;
