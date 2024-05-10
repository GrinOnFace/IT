import React from "react";
import { Link } from "react-router-dom";
import Tantalum from "../../assets/images/TANTALUM.png"

const Login = () => {
    return (
        <div className="login">
            <img src={Tantalum} alt="Tantalum" className="login__img"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Your password"/>
            <button className="login__button">
                <Link to="/" className="login__button_link">Login</Link>
            </button>
            <Link to="/registration" className="login__link">You are not registred?</Link>
        </div>
    )
};

export default Login