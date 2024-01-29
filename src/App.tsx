import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Header } from "./components";

import * as AuthService from "./services/auth.service";
import IUser from './types/user.type';

import { Login, Register, Home, Profile } from "./components/pages";

import EventBus from "./common/EventBus";
import GlobalStyle from "./utils/styling/GlobalStyle";

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }

        EventBus.on("logout", logOut);

        return () => {
            EventBus.remove("logout", logOut);
        };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setCurrentUser(undefined);
    };

    return (
        <div>
            <GlobalStyle />
            <Header currentUser={currentUser} logOut={logOut} />
            <div className="card-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
