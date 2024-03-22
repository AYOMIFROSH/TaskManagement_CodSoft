import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate } from "react-router-dom";

const SignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        axios.post("http://localhost:3001/logout")
        .then(res => {
            console.log(res)
            alert('sure you want to logout?');{
                navigate("./login")
            }
        }).catch(err => console.log(err));
    };

    return(
        <div onAbort={handleSignOut}>
        </div>
    );  
};

export default SignOut;