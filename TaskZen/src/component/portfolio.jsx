import React, { useEffect } from "react";
import axios from "axios";

const portFolio = () => {

    useEffect(() => {
        axios.post("http://localhost:3001/portfolio")
            .then(response => {
                // Handle response here
            })
            .catch(error => {
                // Handle error here
            });
    }, []);

    return(
        <div>

        </div>
    );
};

export default portFolio;