import React   from "react";
import ForOwners from "./forOwners";
import ForRenters from "./ForRenters";
import './css/rental-process.css';

const RentalProcess=()=>{
    return(
        <section className="rental-process-container">
            <h2 className="main-heading">
                How It Works: The Rental Process
            </h2>
            <div className="columns-container">
                <ForOwners/>
                <ForRenters/>
            </div>
        </section>
    )
}

export default RentalProcess;