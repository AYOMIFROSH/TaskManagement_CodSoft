import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./layout";




const Home = () => {

    useEffect(() => {
        axios.post("http://localhost:3001/home")
            .then(response => {
                // Handle response here
            })
            .catch(error => {
                // Handle error here
            });
    }, []);

    return(
        <div >
            <Layout />
        </div>
    )
};

export default Home;