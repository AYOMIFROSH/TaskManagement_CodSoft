import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MySelf = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu state
    };


    return (
        <div>
            <div className="toggle_btn" onClick={toggleMenu} style={{fontSize: '1.5rem', right: '20rem'}}>
                <div className={`dropdown_menu ${isOpen ? 'open' : ''}`} style={{ background: '#adb5bd', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', width: '25%', right: '71%'}}>
                    <li className="Lists"><a href="hero" className="A">Home</a></li>
                    <li className="Lists"><a href="about" className="A">About</a></li>
                    <li className="Lists"><a href="services" className="A">Services</a></li>
                    <li className="Lists"><a href="contact" className="A">Portfolio</a></li>
                    <li className="Lists"><a href="/register" className="action_btn">Platform</a></li>
                </div>
                {isOpen ? (
                    <FontAwesomeIcon icon={faTimes} /> // Close icon (x)
                ) : (
                    <FontAwesomeIcon icon={faBars} /> // Menu icon (bars)
                )}
            </div>
        </div>
    )
};

export default MySelf;