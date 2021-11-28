import React from 'react';
import Icon from '../CSS/images/landing.jpg';
import { Link } from 'react-router-dom';

const Landing = () => {

    return (
        <div className="landing_container">
            <p>Tawnes Reki Realm</p>
            <img src={Icon} />
            <Link className="landingLink" to="/welcome">Start Your Journey</Link>
        </div>
    );
}

export default Landing;