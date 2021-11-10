import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "./img/pool.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { usePaystackPayment } from "react-paystack";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeBooking,
  changeDays,
  addBooking,
  totalState,
  addData,
} from "../Ebuka/ReduxGlobal";
import { app } from "../../base";
import firebase from "firebase";
import { Link } from "react-router-dom";

const Forms = () => {
  const data = useSelector((state) => state.myReducer.bookings);
  const totalCostState = useSelector((state) => state.myReducer.totalRoomCost);
  const days = useSelector((state) => state.myReducer.totalRoomDays);

  const [total, setTotal] = useState(totalCostState);

  const [name, setName] = useState();
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [kinName, setKinName] = useState("");
  const [kinPhoneNo, setKinPhoneNo] = useState("");
  const [date, setDate] = useState("");
  const [paymentData, setPaymentData] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [refNo, setRefNo] = useState("");
  const [err, setError] = useState("");

  console.log("total", total);
  const dispatch = useDispatch();
  const hist = useHistory();

  const postData = async () => {
    await app.firestore().collection("paymentData").doc().set({
      // id: uuid(),
      name,
      phoneNo,
      email,
      kinName,
      kinPhoneNo,
      date,
      paymentStatus,
      refNo,
      total,
    });
    setName("");
    setPhoneNo("");
    setEmail("");
    setKinPhoneNo("");
    setKinName("");
    setDate("");
  };

  const getUserData = async () => {
    await app
      .firestore()
      .collection("paymentData")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setUserData(item);
        console.log(userData);
        dispatch(addData(item));
      });
  };

  useEffect(() => {
    dispatch(totalState());

    // getUserData();
  }, [data]);
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: totalCostState * 100,
    publicKey: "pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18",
    // publicKey: "pk_live_2732df7378e84dbe0013bb9fd7f00faad438e244",
  };

  const onSuccess = (reference) => {
    console.log(reference);
    // setPaymentData(reference);
    // setPaymentStatus(paymentStatus.status);
    // setRefNo(paymentStatus.reference);

    alert(`Sucessfully, receipt has been sent to your email1 @ :${email}`);

    hist.push("/");
  };
  console.log(paymentData);
  console.log("hy", paymentData.status);
  const onClose = () => {
    alert("This Transition wasn't successful");
    // console.log(say);
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <Container>
      <Wrapper>
        <OpacityColor>
          <Form>
            <FormItems>
              <Cancel>
                <CancelIcon>
                  <CloseIcon>
                    <AiOutlineClose />
                  </CloseIcon>
                </CancelIcon>
              </Cancel>
              <InputContainer>
                <div style={{ fontWeight: "bold" }}>
                  Amount to Pay :# {total}
                </div>
                <Inputs
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter your Name"
                />
                <Inputs
                  value={phoneNo}
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}
                  placeholder="Enter Phone Number"
                />
                <Inputs
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter email"
                />
                <Inputs
                  value={kinName}
                  onChange={(e) => {
                    setKinName(e.target.value);
                  }}
                  placeholder="Next of kin Phone Name"
                />
                <Inputs
                  value={kinPhoneNo}
                  onChange={(e) => {
                    setKinPhoneNo(e.target.value);
                  }}
                  placeholder="Enter your Next of Kin contact"
                />
                <Inputs
                  value={date}
                  onChange={(e) => {
                    if (data.includes(date)) {
                      alert("Sorry");
                    } else setDate(e.target.value);
                  }}
                  placeholder="Date"
                />
              </InputContainer>
              <ButtonHolder>
                <Button
                  onClick={() => {
                    initializePayment(onSuccess, onClose);
                  }}
                >
                  Pay now
                </Button>
              </ButtonHolder>
            </FormItems>
          </Form>
        </OpacityColor>
      </Wrapper>
    </Container>
  );
};

export default Forms;

const CloseIcon = styled(AiOutlineClose)`
  font-size: 25px;
  color: white;
  &:hover {
    cursor: pointer;
    transition: all 350ms ease-in-out;
    background-color: white;
    color: red;
  }
`;

const Button = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  background-color: #387eff;
  font-size: 18px;
  transform: scale(1);
  cursor: pointer;
  transition: all 350ms;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    transition: all 350ms ease-in-out;
    background-color: white;
    color: #387eff;
    border: 2px solid #387eff;
  }
`;
const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: 350px) {
    margin-bottom: 30px;
  }
`;
const Inputs = styled.input`
  width: 93%;
  height: 40px;
  border-radius: 5px;
  border: solid #387eff 2px;
  padding: 12px;
  margin: 15px 0;
  @media screen and (max-width: 350px) {
    margin: 8px 0;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  @media screen and (max-width: 350px) {
    margin-bottom: 20px;
  }
`;

const CancelIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: red;
  margin-bottom: 30px;
  font-size: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transition: all 350ms;
  cursor: pointer;
  :hover {
    cursor: pointer;
    transition: all 350ms ease-in-out;
    background-color: white;
    color: red;
    border: 2px solid red;
  }
`;

const Cancel = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  @media screen and (max-width: 350px) {
    margin-top: 20px;
  }
`;

const FormItems = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Form = styled.div`
  width: 30%;
  height: 100%auto;
  background-color: rgba(255, 255, 255);
  z-index: 10;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  box-shadow: black 1px 1px 0 2px;
  @media screen and (max-width: 1000px) and (min-width: 320px) {
    width: 60%;
  }
  @media screen and (max-width: 1200px) and (min-width: 1000px) {
    width: 40%;
  }
  @media screen and (max-width: 500px) and (min-width: 320px) {
    width: 80%;
    border-radius: 6px;
  }
`;
const OpacityColor = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  backdrop-filter: 20px;
  background-repeat: no-repeat;
`;
