import React, { useState } from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {

    return (
        <div className="header fixed-top">
            <img src={logo} alt=""/>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;