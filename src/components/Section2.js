import React from "react";
import "./Section2.css"; 
import "../App.css";
import Web2 from "../assets/web2.png";

function NextSection() {
    return (
        <div className="section2">
            <img src={Web2} alt="" className="Web2" /> 
    <div className="showcase-container" id="custom-position">
        <div className="gradient-bar"></div>
        <h2 className="showcase-title">Showcase</h2>

        <div className="main__video2">
        <video autoPlay loop playsInline muted controls className="video-bg">
    <source src="https://77f0e343-ce7e-4e93-9c01-8a6631a1e600.selstorage.ru/reactapp%2Fmainvideo3.mp4" type="video/mp4" />
</video>

        </div>
    </div> 

    <div className="container">
        <div className="main"></div>

    </div>
</div>

    );
}

export default NextSection;