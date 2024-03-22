import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [name, setName] = useState();

    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            alert('Fill Data');
            return;
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }
        axios.post("http://localhost:3001/login", {email, password })
        .then(res => {
            console.log("login: " + res.data);
            if(res.data.Status === "success") {
                setName(res.data.name)
                if(res.data.role === "admin"){
                    navigate("/dashboard", {state: {name: res.data.name}})
                } else {
                    navigate("/home", {state: {name: res.data.name}})
                }
            
            } else if (res === "Wrong password") {
                alert("Wrong Password");
            } else {
                alert("password Incorrect! please check password and try again");
            }
        }).catch(err => {
            if (err.response && err.response.status === 400) {
                alert("Email does not exist please check the mail or proceed to create account");
            } else {
                console.log(err);
            }
        }).catch(err => {
            console.log(err);
            alert("An error occurred while trying to log in. Please try again.");
        })
    };

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" id="containers">
            <div className="bg-white p-3 rounded w-27">
                <h3>Login</h3>
                <form onSubmit={handleSubmit} className="wrapper">
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input id="put-style-2" type="email" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input id="put-style-2" type="password" placeholder="Enter Password" name="password" className="form-control rounded-0" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <button id="Submit" type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                </form>
                <strong><p>Don't Have an Account?</p></strong>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0"><b>SignUp For Free</b></Link>
                <p>
                    <Link to="/forgot-password">Forgot password?</Link>
                </p>
            </div>
        </div>
    )
};

export default Login;