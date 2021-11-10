import React, { useState, useContext } from "react";
import styled from "styled-components";
import img1 from "./Images/1.jpg";
import { app } from "../base";
import firebase from "firebase";
import { AuthContext } from "./AuthState";
import { v4 as uuid } from "uuid";

const HostHotel = () => {
  const { currentUser } = useContext(AuthContext);
  const [showImage, setShowImage] = useState(img1);
  const [showImage1, setShowImage1] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [roomImage, setRoomImage] = useState("");
  const [facilityImage, setFacilityImage] = useState("");
  const [facility, setFacilty] = useState("");
  const [facilityName, setFacilityName] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [category, setCategory] = useState("");

  const [facilityDesc, setFacilityDesc] = useState("");
  const [roomDesc, setRoomDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [maxPerson, setMaxPerson] = useState(0);
  const [percent, setPercent] = useState("");
  const [percent1, setPercent1] = useState("");

  const uploadFacilityImage = async (e) => {
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
          setFacilityImage(URL);
          console.log(URL);
        });
      }
    );
  };
  const uploadRoomImage = async (e) => {
    const file = e.target.files[0];
    const res = URL.createObjectURL(file);
    setShowImage1(res);

    const fileRef = await app.storage().ref();
    const storeRef = fileRef.child("hotelRoom/" + file.name).put(file);

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
          setRoomImage(URL);
          console.log(URL);
        });
      }
    );
  };

  const [toggle, setToggle] = useState(true);
  const onToggle = () => {
    setToggle(!toggle);
  };
  const [toggle2, setToggle2] = useState(true);
  const onToggle2 = () => {
    setToggle2(!toggle2);
  };

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
          maxPerson,
          category,
          createdBy: currentUser.uid,
        });

      setRoomNo("");
      setRoomDesc("");
      setRoomImage("");
      setPrice("");
      setMaxPerson("");
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
          price,
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
        <Card>
          <LeftPart>
            <img src={showImage} />
          </LeftPart>
          <RightPart>
            <BigWord>
              {toggle === toggle2 ? "Register Rooms" : " Register Facilities"}
            </BigWord>
            <ButtonChange>
              <Button3 onClick={onToggle}>Register Rooms </Button3>
              <Button3 onClick={onToggle2}>Register Facilities </Button3>
            </ButtonChange>
            {toggle === toggle2 ? (
              <ToggleRoom>
                <HoldLabel>
                  <input type="file" id="bg" onChange={uploadFacilityImage} />
                  <Label htmlFor="bg">Upload Image</Label>
                </HoldLabel>
                <input
                  value={roomNo}
                  onChange={(e) => {
                    setRoomNo(e.target.value);
                  }}
                  placeholder="Enter Room No"
                />
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  placeholder="Enter Category"
                >
                  <option>Choose Category</option>
                  <option value="Regular">Regular</option>
                  <option value="Standard">Standard</option>
                  <option value="Luxury">Luxury</option>
                </select>
                <input
                  value={roomDesc}
                  onChange={(e) => {
                    setRoomDesc(e.target.value);
                  }}
                  placeholder="Enter Description"
                />
                <input
                  value={maxPerson}
                  onChange={(e) => {
                    setMaxPerson(e.target.value);
                  }}
                  type="Number"
                  placeholder="Max No of Person"
                />
                <input
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  type="Number"
                  placeholder="Price"
                />
                ` <Button onClick={registerRoom}>Add</Button>
              </ToggleRoom>
            ) : (
              <ToggleRoom2>
                <HoldLabel>
                  <input type="file" id="bg" onChange={uploadRoomImage} />
                  <Label htmlFor="bg">Upload Image</Label>
                </HoldLabel>
                <input
                  value={facilityName}
                  onChange={(e) => {
                    setFacilityName(e.target.value);
                  }}
                  placeholder="Enter Facility Name"
                />
                <input
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  type="Number"
                  placeholder="Price"
                />
                <input
                  value={facilityDesc}
                  onChange={(e) => {
                    setFacilityDesc(e.target.value);
                  }}
                  placeholder="Short Description"
                />
                <Button onClick={registerFacility}>Add</Button>
              </ToggleRoom2>
            )}
          </RightPart>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default HostHotel;

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
  /* width: 100px; */
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
  /* background-image: url("/Images/pexels-pixabay-163864.jpg"); */
  background-color: #004080;
  /* background-color: rgba(255, 255, 255, 0.4); */
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
