import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../CSS/images/logo.jpg';

const Dashboard = () => {

    return (
        <div className="dashboard_container">
        <div className="dbIntro">

            <h2>Tawne's Reiki Realm</h2>

            <img src={Logo} alt="logo" />

            <h4>Balance of Mind, Body, and Spirit</h4>

            <p>
            Boggarts lavender robes, Hermione Granger Fantastic Beasts
            and Where to Find Them. Bee in your bonnet Hand of Glory
            elder wand, spectacles House Cup Bertie Bott’s Every Flavor
            Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s
            Heir mewing kittens Remus Lupin. Palominos scarlet train black
            robes, Metamorphimagus Niffler dead easy second bedroom. Padma
            and Parvati Sorting Hat Minister of Magic blue turban remember
            my last.  
            </p>
        </div>
        </div>
    );
}

export default Dashboard;