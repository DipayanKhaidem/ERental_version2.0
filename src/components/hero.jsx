import {useState,useEffect} from "react";
import "./css/hero.css";

const images=[
"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
"https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29ueXxlbnwwfHwwfHx8MA%3D%3D",
"https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGN8ZW58MHx8MHx8fDA%3D"
];

const Hero=()=>{
    const [background,setBackground]=useState(0);

    useState(()=>{
        const interval=setInterval(()=>{
            setBackground((prevBackground)=>(prevBackground+1)% images.length);
        },3000);
        return()=>clearInterval(interval);
    },[]);


    return(
        <section className="hero"
        style={{
            background:`url(${images[background]}) center/cover no-repeat`,
            backgroundSize:"cover"
        }}
        >
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