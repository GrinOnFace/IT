import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const MainSection = () => {
  const navigate = useNavigate()

  return (
    <section className="app__container__main">
      <header className="app__header">
        <h2 className="app__title">Ваши сервера</h2>
        <Link to={"/addServer"} className="app__add-server">
          <button>+ Add server</button>
        </Link>
      </header>
      <article className="app__article">
        <nav className="app__nav">
          <ul className="app__server-list">
            {[1, 2, 3].map((serverId) => (
              <li key={serverId} className="app__server-item">
                <button className="app__server" onClick={() => navigate(`/server/${serverId}`)}>
                  <span className="app__server-name">My server #{serverId}</span>
                  <div className="app__server-state">
                    <div className="app__server-state-box"></div>
                    <span className="app__server-state-text">Active</span>
                  </div>
                </button>
              </li>
            ))}
            <li className="app__server-item">
              <button className="app__server-add" onClick={() => navigate('/addServer')}>
                <span>+ Add server</span>
              </button>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  )
};

export const App = () => {
  const location = useLocation()

  return (
    <main className="app">
      <Navbar />
      <div className="app__container">
        <Sidebar />
        <MainSection />
      </div>
    </main>
  );
};