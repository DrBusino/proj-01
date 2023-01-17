import React from "react";
//import ReactDOM from "react-dom/client";


import './Home.css';
import AddBar from "./AddBar";
import List from "./List";
function Home () {
    return(
        <div className="Home">
            <div className="Home__container">
               <AddBar/>
               <List/>
            </div>
        </div>
    )
}



export default Home;