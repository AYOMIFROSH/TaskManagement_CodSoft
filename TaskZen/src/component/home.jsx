import React from "react";
import SignOut from "./signOut";
import Header from "./header";
import Todo from "./todo";


const Home = () => {
    return(
        <div>
            <Header/>
            <Todo />
            <SignOut/>
        </div>
    )
};

export default Home;