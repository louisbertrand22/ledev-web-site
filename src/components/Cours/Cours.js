import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Cours() {
    return (
        <header>
            <div className="Cours">
                <h1>Mes Cours</h1>
                <p>Je publie des mini cours sur l'informatique environ 3 fois par mois sur le <a href="https://www.forum.instant-coding-network.fr">forum</a> de Instant Coding&Network.
                </p>
                <Link className="Link" to="/cours">
                    Pour voir mes différents cours.
                </Link>
            </div>
        </header>
    );
}

export default Cours;