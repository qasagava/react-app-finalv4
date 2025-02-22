import React from "react";
import "./Header.css";
import logo from "../assets/Logo4.svg";


function Header() {
    return (
        <header className="header">
            <div className="header-bg">
                {/* Логотип в виде изображения */}
                <img src={logo} alt="Logo" className="logo" />

                {/* Контейнер для навигации и кнопки */}
                <div className="nav-container">
                    <nav className="nav">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#webai">Web Ai</a></li>
                            <li><a href="#sol">Solutions</a></li>
                            <li><a href="#agent">Agents</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#docs">Docs</a></li>
                            <li><a href="https://github.com/webai-defi" target="_blank" rel="noopener noreferrer" >GitHub</a></li>
                        </ul>
                    </nav>
                    
                         <a href="https://chat.webaidefi.com/" target="_blank" rel="noopener noreferrer">
                         <button className="nav-button">Web Ai</button>
                         </a>
                    

                </div>
            </div>
        </header>
    );
}

export default Header;
