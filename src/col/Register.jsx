import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import img1 from "./imgAvatar.png";
import { app } from "../base";
import firebase from "firebase";
import { AuthContext } from "../RegisterAll/AuthState";
import { v4 as uuid } from "uuid";

const Register = () => {
  const { currentUser } = useContext(AuthContext);
  const [hotelReg, setHotelReg] = useState(false);
  const [roomReg, setRoomReg] = useState(true);
  const [percent, setPercent] = useState(0);
  const [percent1, setPercent1] = useState(0);
  const [image, setImage] = useState(img1);
  const [roomImage, setRoomImage] = useState(img1);
  const [avatar, setAvatar] = useState("");
  const [roomAvatar, setRoomAvatar] = useState("");

  const [facilityDesc, setFacilityDesc] = useState("");
  const [facilityImage, setFacilityImage] = useState("");
  const [facility, setFacilty] = useState("");
  const [facilityPrice, setFacilityPrice] = useState(0);
  const [facilityName, setFacilityName] = useState("");

  const [location, setLocation] = useState("");

  const [err, setErr] = useState("");

  const [roomNo, setRoomNo] = useState("");
  const [roomDesc, setRoomDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [maxPersons, setMaxPersons] = useState(0);
  const [category, setCategory] = useState("");

  const regHotel = () => {
    setHotelReg(true);
    setRoomReg(false);
  };
  const regRoom = () => {
    setHotelReg(false);
    setRoomReg(true);
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);

    const fileRef = await app.storage().ref();
    const storeRef = fileRef.child("facilityImage/" + file.name).put(file);

    storeRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapShot) => {
        const counter = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;

        setPercent(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),
      () => {
        storeRef.snapshot.ref.getDownloadURL().then((URL) => {
          setAvatar(URL);
          console.log(URL);
        });
      }
    );
  };
  const uploadImage1 = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setRoomImage(save);

    const fileRef = await app.storage().ref();
    const storeRef = fileRef.child("roomImage/" + file.name).put(file);

    storeRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapShot) => {
        const counter = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;

        setPercent1(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),
      () => {
        storeRef.snapshot.ref.getDownloadURL().then((URL) => {
          setRoomAvatar(URL);
          console.log(URL);
        });
      }
    );
  };

  const user = app.auth().currentUser;
  console.log(user);

  const registerRoom = async () => {
    if (currentUser) {
      await app
        .firestore()
        .collection("hotel")
        .doc(currentUser.uid)
        .collection("room")
        .doc()
        .set({
          id: uuid(),
          roomNo,
          roomDesc,
          roomImage,
          price,
          maxPersons,
          category,
          createdBy: currentUser.uid,
        });

      setRoomNo("");
      setRoomDesc("");
      setRoomImage("");
      setPrice("");
      setMaxPersons("");
    }
  };
  const registerFacility = async () => {
    if (currentUser) {
      await app
        .firestore()
        .collection("hotel")
        .doc(currentUser.uid)
        .collection("facility")
        .doc()
        .set({
          id: uuid(),
          facilityName,
          facilityImage,
          facilityPrice,
          facilityDesc,
          createdBy: currentUser.uid,
        });
      setFacilityName("");
      setPrice("");
      setFacilityDesc("");
    }
  };

  return (
    <Container>
      <Wrapper>
        <ButtonHolder>
          <Button1 onClick={regHotel}>Create a Facility</Button1>
          <Button1 onClick={regRoom}>Create a new Room</Button1>
        </ButtonHolder>
        {hotelReg ? (
          <CardHolder>
            <HoldImage>
              <Image src={image} />
              {percent > 0.0000001 && percent <= 99.999 ? (
                <Cover>{Math.round(percent)}</Cover>
              ) : null}
            </HoldImage>
            <HoldLabel>
              <Input type="file" id="up" onChange={uploadImage} />
            </HoldLabel>
            <Label htmlFor="up">Upload Facility Image</Label>
            <Input
              value={facilityName}
              onChange={(e) => {
                setFacilityName(e.target.value);
              }}
              placeholder="Enter Facility Name"
            />
            <Input
              value={facilityDesc}
              onChange={(e) => {
                setFacilityDesc(e.target.value);
              }}
              placeholder="Enter Facility's Description "
            />
            <Input
              type="Number"
              value={facilityPrice}
              onChange={(e) => {
                setFacilityPrice(e.target.value);
              }}
              placeholder="Enter Price"
            />

            <Button1 onClick={registerFacility}>Register</Button1>
          </CardHolder>
        ) : (
          <CardHolder>
            <HoldImage>
              <Image src={image} />
              {percent > 0.0000001 && percent <= 99.999 ? (
                <Cover>{Math.round(percent)}</Cover>
              ) : null}
            </HoldImage>
            <HoldLabel>
              <Input type="file" id="up" onChange={uploadImage1} />
            </HoldLabel>
            <Label htmlFor="up">Upload Room Image</Label>
            <Input
              value={roomNo}
              onChange={(e) => {
                setRoomNo(e.target.value);
              }}
              placeholder="Enter Room Number"
            />
            <Input
              value={roomDesc}
              onChange={(e) => {
                setRoomDesc(e.target.value);
              }}
              placeholder="Enter Room's Description "
            />
            <Input
              type="Number"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Enter Price "
            />
            <Input
              type="Number"
              value={maxPersons}
              onChange={(e) => {
                setMaxPersons(e.target.value);
              }}
              placeholder="Enter your Max no of persons"
            />
            <HoldOption>
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option>Please Choose a Category</option>
                <option value="Regular">Regular</option>
                <option value="Standard">Standard</option>
                <option value="Luxury">Luxury</option>
              </select>
            </HoldOption>
            <Button1 onClick={registerRoom}>Register room</Button1>
          </CardHolder>
        )}
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #004080;
  /* background-image: url("../RegisterAll/images/1.jpg"); */
`;
const Wrapper = styled.div`
  width: 700px;
  min-height: 600px;
  height: 100%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 100%;
    min-height: 500px;
    flex-wrap: wrap;
  }
`;

const ButtonHolder = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Button1 = styled.div`
  font-weight: bold;
  height: 40px;
  width: 200px;
  background-color: #004080;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transition: all 350ms;
  cursor: pointer;
  margin: 5px;
  &:hover {
    transform: scale(0.99);
  }
`;
const HoldImage = styled.div`
  height: 150px;
  width: 150px;
  /* margin: 5px 0px; */
  border: 1px solid #004080;
  border-radius: 50%;
  position: relative;
`;
const Cover = styled.div`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  /* border: 1px solid #004080; */
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  border: 1px solid #004080;
`;
const CardHolder = styled.div`
  width: 280px;
  display: flex;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;

  height: 100%;
  flex-direction: column;
  Input {
    margin: 10px 0px;
  }
  Button {
    width: 100%;
    background-color: ${({ clr }) => (clr ? "red" : "#004080")};
  }
  div {
    font-weight: bold;
    margin: 5px 0px;
  }
`;

const HoldLabel = styled.div`
  display: none;
`;
const Label = styled.label`
  padding: 10px;
  background-color: #004080;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  margin: 5px 0px;
`;

const Text = styled.div`
  margin: 5px 0px;
  align-items: center;
  display: flex;
  div {
    margin-left: 5px;
    color: #004080;
    cursor: pointer;
    font-weight: bold;
  }
`;

const HoldOption = styled.div`
  width: 100%;
`;
