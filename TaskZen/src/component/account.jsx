import React, {useState, useEffect} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Account = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu state
    };

    
    

    useEffect(() => {
        axios.post("http://localhost:3001/account")
            .then(response => {
                // Handle response here
            })
            .catch(error => {
                // Handle error here
            });
    }, []);

    return(
        <div>
            <div className="Body">
                <header>
                    <div className="Navbar">
                        <div className="Logo"><a href="#" className="A">TaskZen</a></div>
                        <ul className="Links">
                            <li className="Lists"><a href="#" className="A">Home</a></li>
                            <li className="Lists"><a href="#" className="A">About</a></li>
                            <li className="Lists"><a href="#" className="A">Services</a></li>
                            <li className="Lists"><a href="#" className="A">Portfolio</a></li>
                        </ul>
                        <li className="Lists"><a href="/register" className="action_btn">Get Started</a></li>
                        <div className="toggle_btn" onClick={toggleMenu}>
                        {isOpen ? (
                                <FontAwesomeIcon icon={faTimes} /> // Close icon (x)
                            ) : (
                                <FontAwesomeIcon icon={faBars} /> // Menu icon (bars)
                            )}
                        </div>
                    </div>

                    <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
                        <li className="Lists"><a href="hero" className="A">Home</a></li>
                        <li className="Lists"><a href="about" className="A">About</a></li>
                        <li className="Lists"><a href="services" className="A">Services</a></li>
                        <li className="Lists"><a href="contact" className="A">Portfolio</a></li>
                        <li className="Lists"><a href="/register" className="action_btn">Get Started</a></li>
                    </div>
                </header>
                <main>
                    <section id="hero">
                       <h1>Welcome</h1>
                       <p><b>“TaskZen is a task management app that helps you stay focused and productive. <br/> The name ‘TaskZen’ was inspired by the idea of achieving a state of calm and clarity while managing your tasks. With TaskZen, you can organize your tasks, set priorities, and track your progress with ease. Our user-friendly interface and intuitive features make it easy to stay on top of your to-do list and achieve your goals. Whether you’re a busy professional, a student, or just someone who wants to be more organized, TaskZen can help you get things done.TaskZen makes living life easy”</b></p>        
                    </section>
                </main>

                <footer style={{textAlign: 'center', backgroundColor: 'blue', padding: '5px', marginTop: '3px'}}>
                    <h1 style={{color: "#fff", fontSize: '1rem'}}>Founder</h1> 
                    <p><Link to='/portfolio'><cite style={{color: '#fff'}}>Olumade Temitayo</cite></Link></p>    
                </footer>
            </div>
        </div>
    );
};

export default Account;