import React, {useContext, useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header.component";
import {UserContext} from "./context/provider/user/user.provider";
import Contact from "./pages/Contact/contact.page";
import Homepage from "./pages/Homepage/home.page";
import PostPage from "./pages/Postpage/post.page";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/signinandsignup.page";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
const App = () => {
    const {checkUserSession, userLoggedIn} = useContext(UserContext);

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route exact path="/login" element={userLoggedIn ? <Navigate to="/"/> : <SignInAndSignUpPage/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="posts/:date/:id/:slug" element={<PostPage/>}/>
            </Routes>
        </div>
    );
};

export default App;
