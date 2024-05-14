import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const AddServer = () => {
  const navigate = useNavigate();

  return (
    <main className="app">
      <Navbar />
      <div className="app__container">
        <Sidebar />
        <section className="app__container__add">
          <header className="add__header">
            <span className="add__header-step">1/5</span>
            <h2 className="add__header-title">Подключение нового сервера</h2>
          </header>
          <article className="add__content">
            <label className="add__label" htmlFor="name">Название</label>
            <input className="add__input" type="text" id="name" placeholder="My server" />
            <label className="add__label" htmlFor="description">Описание</label>
            <textarea className="add__textarea" name="description" id="description"></textarea>
            <Link className="add__link" to="/addServerTwo">
              <button className="add__button">Следующий шаг →</button>
            </Link>
          </article>
        </section>
      </div>
    </main>
  );
};

export default AddServer;
