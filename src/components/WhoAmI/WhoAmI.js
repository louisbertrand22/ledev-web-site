import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
const user = "Louis BERTRAND";

function WhoAmI() {
    return (
        <header>
            <div className="WhoAmI">
                <h1>Qui suis-je ?</h1>
                <p>Je m'appelle {`${user}`}, j'ai 18 ans et je suis en première année de prepa à l'école d'informatique EPITA à Paris,
                    je suis un pationné par l'informatique.
                    J'écris des cours lié à l'informatique pour Instant Coding&Network depuis de 22 janviers 2023.
                </p>
                <Link className="Link" to="/about">
                    Pour en savoir plus sur moi.
                </Link>
            </div>
        </header>
    );
}

export default WhoAmI;