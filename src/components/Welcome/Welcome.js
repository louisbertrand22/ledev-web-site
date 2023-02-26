import '../../App.css';
import React from 'react';
import { useState, createContext } from "react";
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Partner from '../Partner/Partner';
import WhoAmI from '../WhoAmI/WhoAmI';
import Cours from '../Cours/Cours';
const UserContext = createContext();
function Welcome() {
    const [user] = useState("Louis BERTRAND");
    return (
        <div className="welcomePage">
            <header className="App">
            <UserContext.Provider value={user}>
                <Home />
                <WhoAmI />
                <Partner />
                <Cours />
                <Contact />
                </UserContext.Provider>
            </header>
        </div>
    )
}

export default Welcome;