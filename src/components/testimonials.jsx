import React from "react";
import "./css/testimonials.css";


    const testimonials=[
        {
            id:1,
            name:"Riya Sharma",
            review:"The laptop i rented was in perfect condition, Saved me money during my project work",
            role:"Student, Bangalore"
        },

    {
        id:2,
        name:"Arjun Mehta",
        review:"Fast delivery and excellent customer support. Highly recommended!!!",
        role:"Freelancer, Pune"
    },

    {
        id:3,
        name:"Sneha Verma",
        review:"Great Service! Renting electronics has never been this easy and affordable",
        role:"Startup founder, Delhi"
    }
    ];
    const Testimonials=()=>{

    return(
        <section className="testimonials">
            <h2 className="Section-title">What Our Customers Say</h2>
            <br></br>
            <div className="testimonial-container">
                {testimonials.map((testimonial) =>(
                    <div className="testimonial-card" key={testimonial.id}>
                        <p className="review">{testimonial.review}</p>
                        <div className="user-info">
                            <h4>{testimonial.name}</h4>
                            <span>{testimonial.role}</span>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
};

export default Testimonials;