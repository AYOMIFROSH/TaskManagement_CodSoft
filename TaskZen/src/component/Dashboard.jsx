import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SignOut from "./signOut";

const Dashboard = () => {
    const [suc, setSuc] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:3001/dashboard")
        .then(res => {
            console.log(res.data);
            if(res.data === "Success"){
                setSuc("Successded ok")
            } else {
                navigate("/")
            }
        }).catch(err => console.log(err));
    }, [])
    return(
        <div>
            <h3>dashboard</h3>
            <p>{suc}</p>
            <SignOut/>
        </div>
    )
}; 

export default Dashboard;