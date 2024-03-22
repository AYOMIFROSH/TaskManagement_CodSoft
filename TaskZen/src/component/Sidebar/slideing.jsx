import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Sliding = () => {

    const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu state
    };
    

    return (
        <div>
            <div className='Headerr'>
                <div className="toggle_btn" onClick={toggleMenu}>
                    {isOpen ? (
                            <FontAwesomeIcon icon={faTimes} style={{fontSize: '1.8rem'}}/> // Close icon (x)
                        ) : (
                            <FontAwesomeIcon icon={faBars} style={{fontSize: '1.8rem'}}/> // Menu icon (bars)
                        )}
                </div>
                <div className={`dropdown_menu ${isOpen ? 'open' : ''}`} style={{backgroundColor: 'grey', borderRadius: '10px', transition: '.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'}}>
                    <li className="Lists"><a href="hero" className="A">Home</a></li>
                    <li className="Lists"><a href="about" className="A">About</a></li>
                    <li className="Lists"><a href="services" className="A">Services</a></li>
                    <li className="Lists"><a href="contact" className="A">Portfolio</a></li>
                    <li className="Lists"><a href="/register" className="action_btn">Get Started</a></li>
                </div>
            </div>
        </div>
    );
};

export default Sliding;
