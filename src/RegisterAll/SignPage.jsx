import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { app } from "./../base";
import { useHistory } from "react-router-dom";
import "./Sign.css";
import signImg from "./Images/1.jpg";
import styled from "styled-components";
import imgAvatar from "./imgAvatar.png";
import firebase from "firebase";

const db = app.firestore().collection("user");
function SignPage() {
  const hist = useHistory();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [hasAccount, setHasAccount] = useState(false);
  const [image, setImage] = useState(imgAvatar);
  const [avatar, setAvatar] = useState("");
  const [percent, setPercent] = useState(0.00001);

  // const clearInput = () => {
  //   setEmail("");
  //   setPassword("");
  // };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const signIn2 = async () => {
    const saveUser = await app
      .auth()
      .signInWithEmailAndPassword(email, password);

    hist.push("/registerHotel");
  };

  const SignIN = async () => {
    clearErrors();
    const User = await app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });

    if (User) {
      alert("Welcome");
      hist.push("/registerHotel");
      window.location.reload(true);
    }
  };
  const SignUp = async () => {
    const saveUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
    if (saveUser) {
      await app.firestore().collection("users").doc(saveUser.user.uid).set({
        avatar,
        name,
        email,
        password,
        createdBy: saveUser.user.uid,
      });
      hist.push("/registerHotel");
    }
  };

  const GoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const saveUser = await app.auth().signInWithPopup(provider);

    if (saveUser) {
      await app.firestore().collection("users").doc(saveUser.user.uid).set({
        avatar: saveUser.user.photoURL,
        name: saveUser.user.displayName,
        email: saveUser.user.email,
        password,
        createdBy: saveUser.user.uid,
      });
    }

    hist.push("/registerHotel");
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);

    const fileRef = await app.storage().ref();
    const storeRef = fileRef.child("avatar/" + file.name).put(file);

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

  // const Show = () => {
  //   setOpen(!open)
  // }

  return (
    <div className="SignUpMain">
      <div className="SignUpAndImageControl">
        <div className="SignUpImageDiv">
          <img src={signImg} alt="" className="SignImage" />
        </div>
        <div className="SubsignUp">
          {hasAccount ? (
            <>
              <div className="InputDivCtrl">
                <Image src={image} />

                <label htmlFor="pix" className="labInput">
                  Upload Image
                </label>
                <Input
                  className="InputDiv1"
                  type="file"
                  id="pix"
                  autoFocus
                  required
                  onChange={uploadImage}
                />

                <div style={{ color: "white", fontWeight: "600" }}>Name</div>
                <Input
                  style={{ width: "250px" }}
                  className="InputDiv"
                  placeholder="Name"
                  type="name"
                  autoFocus
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div style={{ color: "white", fontWeight: "600" }}>E-mail</div>

                <Input
                  className="InputDiv"
                  placeholder="Email"
                  type="email"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p style={{ color: "red", fontSize: "11px" }}> {emailError} </p>
                <div style={{ color: "white", fontWeight: "600" }}>
                  PassWord
                </div>
                <Input
                  className="InputDiv"
                  placeholder="Password"
                  type="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />

                <p style={{ color: "red", fontSize: "11px" }}>
                  {" "}
                  {passwordError}{" "}
                </p>
                <Button
                  onClick={SignUp}
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    backgroundColor: "#4081ec",
                    marginTop: "10px",
                    width: "170px",
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  onClick={GoogleSignIn}
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    backgroundColor: "red",
                    marginTop: "10px",
                  }}
                >
                  Sign Up With Google
                </Button>
                <p style={{ color: "white", fontWeight: "600" }}>
                  Have An Account ?{" "}
                  <span
                    onClick={() => setHasAccount(!hasAccount)}
                    style={{
                      color: "gold",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Sign In
                  </span>
                </p>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  width: "300px",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "white", fontWeight: "600" }}>
                  UserName
                </div>
                <Input
                  style={{ width: "280px" }}
                  className="InputDiv"
                  placeholder="Email"
                  type="email"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p style={{ color: "red", fontSize: "11px" }}> {emailError} </p>
                <div style={{ color: "white", fontWeight: "600" }}>
                  Password
                </div>
                <Input
                  style={{ width: "280px" }}
                  className="InputDiv"
                  placeholder="Password"
                  type="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p style={{ color: "red", fontSize: "11px" }}>
                  {" "}
                  {passwordError}{" "}
                </p>
                <Button
                  onClick={signIn2}
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    backgroundColor: "#4081ec",
                    marginTop: "10px",
                  }}
                >
                  Sign In
                </Button>
                <Button
                  onClick={GoogleSignIn}
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    backgroundColor: "red",
                    marginTop: "10px",
                  }}
                >
                  Log In With Google
                </Button>
                <p style={{ color: "white", fontWeight: "600" }}>
                  Don't Have An Account ?{" "}
                  <span
                    onClick={() => setHasAccount(!hasAccount)}
                    style={{
                      color: "lightgreen",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignPage;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;
