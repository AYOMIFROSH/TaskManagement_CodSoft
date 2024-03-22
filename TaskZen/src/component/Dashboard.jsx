import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./header";

const Dashboard = () => {
    const [suc, setSuc] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:3001/dashboard")
        .then(res => {
            console.log(res.data);
            if(res.data === "Success"){
                setSuc('success')
            } else {
                navigate("/")
            }
        }).catch(err => console.log(err));
    }, [])
    return(
        <div>
            <Header />
            <p>{suc}</p>
            <Link to='/login'><main>logOut</main></Link>
        </div>
    )
}; 

export default Dashboard;