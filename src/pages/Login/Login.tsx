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
            <div className="login__buttons">
                <button className="login__buttons_sign">
                    <Link to="/">Sign in</Link>
                </button>
                <button className="login__buttons_question">
                    <Link to="/registration">You are not registred?</Link>
                </button>
            </div>
            
            <Link to="/restorePassword" className="login__link">Forgot password?</Link>
        </div>
    )
};

export default Login