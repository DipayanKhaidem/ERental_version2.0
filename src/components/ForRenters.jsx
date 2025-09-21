import React from "react";
import './css/rental-process.css';

const ForRenters = () => {
  return (
    <section className="forRenters">
      <h4 className="sub-heading">For Renters</h4>
      <div className="step">
        <h4 className="step-title">1. Discover </h4>
        <p className="step-description">Browse through a wide selection of electronics, from drones to cameras and laptops. Use the search bar or filters to find exactly what you need.</p>
      </div>
      <div className="step">
        <h4 className="step-title">2. Request </h4>
        <p className="step-description">Once you find an item you love, check its availability on the calendar. Select your desired rental dates and send a request to the owner.</p>
      </div>
      <div className="step">
        <h4 className="step-title">3. Connect & Confirm </h4>
        <p className="step-description">The owner will review your request and confirm the rental. You can then use our messaging system to coordinate a convenient time and place for pickup or delivery.</p>
      </div>
      <div className="step">
        <h4 className="step-title">4. Enjoy </h4>
        <p className="step-description">Meet the owner, verify the item's condition, and enjoy using your rental! The full payment is securely held until the rental period is complete.</p>
      </div>
      <div className="step">
        <h4 className="step-title">5. Return </h4>
        <p className="step-description">At the end of your rental period, simply return the item to the owner in the same condition. Once the owner confirms the return, your payment will be released to them.</p>
      </div>
    </section>
  );
};

export default ForRenters;
