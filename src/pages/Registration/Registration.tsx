import React from "react";
import { Link } from "react-router-dom";
import Tantalum from "../../assets/images/TANTALUM.png"

const Registration = () => {
    return (
        <div className="registration">
            <img src={Tantalum} alt="Tantalum" className="registration__img"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Your password"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Your password"/>
            <button className="registration__button">
                <Link to="/login">Sign in</Link>
            </button>
        </div>
    )
};

export default Registration