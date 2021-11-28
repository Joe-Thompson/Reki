import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hams from '../CSS/images/apps-outline.svg';

const NavBar = (props) => {

    const [navBarOpen, setNavBarOpen] = useState(false);

    const links = [
        {
            id: 1,
            path: "/welcome",
            text: "Home"
        },
        {
            id: 2,
            path: "/services",
            text: "Services"
        },
        {
            id:3,
            path: "/history",
            text: "Learn More"
        },
        {
            id: 4,
            path: window.location.pathname,
            text: "Close Menu"
        }
    ];

    const handleToggle = () => {
        setNavBarOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavBarOpen(false)
      }

    return (

        <nav className='NavBar'>
            <button className='hamsBtn' onClick={handleToggle}>{navBarOpen ? "" : "Paths" }</button>
            <ul className={`menuNav ${navBarOpen ? " showMenu" : ""}`}>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                        <Link  to={link.path}
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact to={link.path}>{link.text}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default NavBar;