import React from "react";
import "./css/hero.css";

const Hero=()=>{
    return(
        <section className="hero">
            <div className="hero-content">
                <h1>Rent the latest tech without the commitment</h1>
                <p>Access a wide range of electronic devices for short-term use,perfect for projects, travel or trying out new gadgets</p>
                <div className="search-bar">
                    <input type="text" placeholder="Search for devices..." />
                    <button>Search</button>
                </div>
            </div>
        </section>

    );
};

export default Hero;