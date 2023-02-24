import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import Home from '../Home/Home'
import ErrorPage from '../ErrorPage/ErrorPage'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact';
import Partner from '../Partner/Partner';
import WhoAmI from '../WhoAmI/WhoAmI';
import Cours from '../Cours/Cours';

function Welcome() {
    return (
        <div className="welcomePage">
        <header className="App">
            <Home />
            <WhoAmI />
            <Partner />
            <Cours />
            <Contact />
        </header>
    </div>
    )
}

export default Welcome;