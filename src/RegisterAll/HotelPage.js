import React, { useState, useContext } from "react";
import styled from "styled-components";
import img1 from "../RegisterAll/Images/1.jpg";
import { app } from "../base";
import firebase from "firebase";
import { AuthContext } from "../RegisterAll/AuthState";
import { useHistory } from "react-router-dom";

const HotelPage = () => {
  const { currentUser } = useContext(AuthContext);
  const hist = useHistory();
  const [showImage, setShowImage] = useState(img1);
  const [hotelName, setHotelName] = useState("");
  const [hotelImage, setHotelImage] = useState("");

  const [hotelDesc, setHotelDesc] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [percent, setPercent] = useState("");

  const uploadHotel = async (e) => {
    const file = e.target.files[0];
    const res = URL.createObjectURL(file);
    setShowImage(res);

    const fileRef = await app.storage().ref();
    const storeRef = fileRef.child("hotelRoom/" + file.name).put(file);

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
          setHotelImage(URL);
          console.log(URL);
        });
      }
    );
  };
  console.log(currentUser);

  const registerHotel = async () => {
    if (currentUser) {
      await app.firestore().collection("hotel").doc(currentUser.uid).set({
        hotelName,
        hotelDesc,
        hotelImage,
        location,
        address,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        createdBy: currentUser.uid,
      });
      hist.push("/register");
      console.log("hello");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Card>
          <LeftPart>
            <img src={showImage} />
          </LeftPart>
          <RightPart>
            <ToggleRoom>
              <HoldLabel>
                <input type="file" id="bg" onChange={uploadHotel} />
                <Label htmlFor="bg">Upload Image</Label>
              </HoldLabel>
              <input
                value={hotelName}
                onChange={(e) => {
                  setHotelName(e.target.value);
                }}
                placeholder="Enter Hotel name"
              />
              <select
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                placeholder="Enter Location"
              >
                <option>Please Choose a Location</option>
                <option value="Ajegunle">Ajegunle</option>
                <option value="Apapa">Apapa</option>
                <option value="Festac">Festac</option>
              </select>
              <input
                value={hotelDesc}
                onChange={(e) => {
                  setHotelDesc(e.target.value);
                }}
                placeholder="Enter Hotel Description"
              />
              <input
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder="Enter Address"
              />

              <Button onClick={registerHotel}>Add</Button>
            </ToggleRoom>
          </RightPart>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default HotelPage;

const HoldLabel = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  input {
    display: none;
  }
`;
const Label = styled.label`
  padding: 10px;
  background-color: #004080;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  margin: 10px 0px;
`;

const ToggleRoom2 = styled.div`
  margin: -10px 0px;
`;
const ToggleRoom = styled.div`
  margin: -10px 0px;
`;
const Button3 = styled.div`
  width: 150px;
  height: 40px;
  margin: 0px 10px;
  background-color: #004080;
  color: white;
  /* margin-left: 130px;
        margin-top: 20px; */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (max-width: 475px) and (min-width: 320px) {
    width: 120px;
    margin-left: 0;
    font-size: 15px;
  }
  /* @media screen and (max-width: 475px) and (min-width: 320px){
        margin-left: 0;
        margin-top: 20px;
    } */
`;
const ButtonChange = styled.div`
  width: 100%;
  height: 60px;
  /* background-color: blue;   */
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-image: url("/Images/pexels-pixabay-163864.jpg");
  background-color: rgba(255, 255, 255, 0.4); */
  background-color: #004080;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 475px) and (min-width: 320px) {
  }
`;
const Card = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (max-width: 475px) and (min-width: 320px) {
    height: auto;
    width: 80%;
    flex-wrap: wrap;
  }
`;
const LeftPart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  border-radius: 10px 0 0 10px;

  img {
    width: 70%;
    height: 70%;
  }

  @media screen and (max-width: 475px) and (min-width: 320px) {
    margin: 10px;
    width: 90%;
  }
`;
const RightPart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  input {
    width: 85%;
    height: 25px;
    border-radius: 3px;
    margin-top: 10px;
    margin-left: 15px;
    border: none;
    padding: 10px;

    @media screen and (max-width: 475px) and (min-width: 320px) {
      width: 85%;
      margin-left: 0;
    }
  }
  @media (max-width: 475px) and (min-width: 320px) {
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

  @media screen and (max-width: 475px) and (min-width: 320px) {
    display: none;
  }
`;
const SmallWordS = styled.div`
  font-size: 15px;
  font-family: poppins;
  text-align: center;
  color: white;
  width: 80%;
  margin-left: 30px;
  margin-top: 10px;

  @media screen and (max-width: 475px) and (min-width: 320px) {
    display: none;
  }
`;
const Button = styled.div`
  width: 150px;
  height: 40px;
  background-color: #004080;
  color: white;
  margin-left: 100px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (max-width: 475px) and (min-width: 320px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;
