import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="Header">
                <h1>Ledeveloppeur - Web Site</h1>
            </div>
            <div className="Header-link">
                <Link className="Link" to="/">
                    Retour
                </Link>
            </div>
        </header>
    );
}

export default Header;