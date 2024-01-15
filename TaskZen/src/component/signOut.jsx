import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate } from "react-router-dom";

const SignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        axios.post("http://localhost:3001/logout")
        .then(res => {
            console.log(res)
            navigate("./login")
        }).catch(err => console.log(err));
    };

    return(
        <div>
            <form onSubmit={handleSignOut}>
                <Link to="/login" className="btn btn-default border bg-light rounded-0" style={{ width: "100px", display: "inline-block", textAlign: "center"}}>Sign Out</Link>
            </form>
        </div>
    );
};

export default SignOut;