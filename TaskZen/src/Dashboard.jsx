import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        </div>
    )
}; 

export default Dashboard;