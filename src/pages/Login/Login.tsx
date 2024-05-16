import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Tantalum from "../../assets/images/TANTALUM.png"
import { Context } from "../..";

const Login = () => {
    const { store } = useContext(Context)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div className="login">
            <img src={Tantalum} alt="Tantalum" className="login__img"/>
            <label className="login__label" htmlFor="email">Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} className="login__input" type="email" id="email" placeholder="Your email"/>
            <label className="login__label" htmlFor="password">Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} className="login__input" type="password" id="password" placeholder="Your password"/>
            <div className="login__buttons">
                <button className="login__buttons_sign" onClick={() => store.login(email, password)}>
                    Sign in
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