import React from "react";

const HeroCards=()=>{
    return(
        <section className="hero-card">
            <h1>Featured Products</h1>
            <div className="display-product">
            <img src="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" className="product-image"></img>
            </div>
            <div className="product-info">
                <h2>Headphones</h2>
                <p>Enjoy immersive sound quality with our premium headphones.</p>
            </div>
        </section>
    );
};

export default HeroCards;
