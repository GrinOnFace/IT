import React from "react";
import { Link } from "react-router-dom";
import Tantalum from "../../assets/images/TANTALUM.png"

const Registration = () => {
    return (
        <div className="registration">
            <img src={Tantalum} alt="Tantalum" className="registration__img"/>
            <label className="registration__label" htmlFor="email">Email</label>
            <input className="registration__input" type="email" id="email" placeholder="Your email"/>
            <label className="registration__label" htmlFor="password">Password</label>
            <input className="registration__input" type="password" id="password" placeholder="Your password"/>
            <label className="registration__label" htmlFor="password">Repeat password</label>
            <input className="registration__input" type="password" id="password" placeholder="Repeat your password"/>
            <button className="registration__button">
                <Link to="/login">Sign up</Link>
            </button>
        </div>
    )
};

export default Registration