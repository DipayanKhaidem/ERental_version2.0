import React from "react";
import "./css/hero-card.css";

const HeroCards=()=>{

    const products=[
        {
            id:1,
            name:"Headphones",
            description:"Enjoy immersive sound quality with our premium headphones.",
            image:"https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:2,
            name:"Camera",
            description:"Capture stunning photos with our high-quality camera.",
            image:"https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2FtZXJhfGVufDB8fDB8fHww://images.unsplash.com/photo-1588702547926-4c8c5c5c5c5c?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:3,
            name:"PlayStation 5",
            description:"Experience the next generation of gaming with PlayStation 5.",
            image:"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UFM1fGVufDB8fDB8fHww"
        },
        {
            id:4,
            name:"Laptop",
            description:"Powerful and portable laptops for all your computing needs.",
            image:"https://images.unsplash.com/photo-1515846865653-cfda085cca48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxNYWNib29rfGVufDB8fDB8fHww"
        }
    ];


    return(
        <section className="hero-card">
            <h1>Featured Products</h1>
            <div className="card-container">
           {products.map((product)=>(
            <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} className="product-image" />
                 <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
            </div>
            
           ))}
            </div>
           
        </section>
    );
};

export default HeroCards;
