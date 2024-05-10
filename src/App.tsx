import React from "react";
import './App.scss'
import { Outlet, Link } from "react-router-dom";

export const App = () => {
  return (
    <div className="">
      <Link to={'/about'}>about</Link>
      <Link to={'/shop'}>shop</Link>
      <h1 className="value">wgege</h1>
      <Outlet/>
    </div>
  )
};