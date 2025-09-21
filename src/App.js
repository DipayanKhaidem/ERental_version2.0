import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import HeroCards from "./components/hero-cards";
import Testimonials from "./components/testimonials";
import RentalProcess from "./components/RentalProcess";

const App = () => {
    return(
      <>
      <Navbar />
      <Hero />
      <HeroCards />
      <Testimonials/>
      <RentalProcess/>
      </>
    )
}

export default App;