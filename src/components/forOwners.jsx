import React from "react";
import './css/rental-process.css';

const  ForOwners=()=>{
    return(
        <section className="forOwners">
            <div className="sub-heading">
                <h4>As an Owner</h4></div>
                <div className="step">
                    <h4 className="step-title">1. List your device</h4>
                    <p className="step-description">Have an electronic device you're not using? List it for free! Add a title, description,photos , and set your own daily rental price</p>
                </div>
                  <div className="step">
                    <h4 className="step-title">2. Get a Request</h4>
                    <p className="step-description">Once your device is live, interested renters will send you requests for their desired dates.You'll recieve a notification and can review their profile</p>
                </div>
                  <div className="step">
                    <h4 className="step-title">3. Accept and Arrange</h4>
                    <p className="step-description">Accept the request and use our messaging feature to communicate with the renter. Arrange a convenient time and location for them to pick up the device.</p>
                </div>
                  <div className="step">
                    <h4 className="step-title">4. Rent & Earn</h4>
                    <p className="step-description">Meet the renter, confirm the device's condition, and let them enjoy their rental. We securely hold the payment until the rental is complete</p>
                </div>
                  <div className="step">
                    <h4 className="step-title">5. Get Paid</h4>
                    <p className="step-description">Once the item is safely returned and you've confirmed its condition, the rental payment is released directly to your account. It's that simple!</p>
                </div>
            
        </section>
    )

};

export default ForOwners;