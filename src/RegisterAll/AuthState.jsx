import React, { useState, useEffect, createContext } from "react";
import { app } from "./../base";

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
