import React from "react";
import Tantalum from "../../assets/images/TANTALUM.png"
import { Link } from "react-router-dom";

const Restore = () => {
    return (
        <div className="restore">
            <img src={Tantalum} alt="Tantalum" className="restore__img"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email"/>
            <button className="restore__button">
                <Link to="/login">Send password</Link>
            </button>
        </div>
    )
};

export default Restore