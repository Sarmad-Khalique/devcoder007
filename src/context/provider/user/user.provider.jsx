import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import React, { createContext, useState } from "react";

export const UserContext = createContext({
  checkUserSession: ()=>{},
  loginUser: ()=>{},
  logoutUser: ()=>{},
  userLoggedIn: false,
  signUpUser: ()=>{},
});

const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const baseUrl = "http://127.0.0.1:8000";

  let loginUser = async ({ username, password }) => {
    let response = await axios.post(`${baseUrl}/api/token/`, {
      username: username,
      password: password,
    });
    if (response.status === 200) {
      setAuthTokens(response.data);
      setUserLoggedIn(true);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
    } else {
      alert("An error occoured while logging in the user");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUserLoggedIn(false);
    localStorage.removeItem("authTokens");
  };

  const checkUserSession = async () => {
    if (!authTokens) {
      return;
    }
    const isTokenExpired =
      dayjs.unix(jwt_decode(authTokens.access).exp).diff(dayjs()) < 1;
      if (!isTokenExpired) {
      setUserLoggedIn(true);
      return;
    }

    const response = await axios.post(`${baseUrl}/api/token/refresh/`, {
      refresh: authTokens.refresh,
    });
    localStorage.setItem("authTokens", JSON.stringify(response.data));
    setUserLoggedIn(true);
  };

  const signUpUser = async ({ username, email, password, confirmPassword }) => {
    let password2 = confirmPassword
    const response = await axios.post(`${baseUrl}/api/sign-up/`, {
      username,
      email,
      password,
      password2
    });
    if (response.status === 201) {
      loginUser({username, password})
    }
    loginUser(username, password);
  };

  const values = {
    checkUserSession,
    loginUser,
    logoutUser,
    userLoggedIn,
    signUpUser,
    authTokens
  }


  return (
    <UserContext.Provider
      value={values}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
