import React, { useState } from "react";
import { Link } from "react-router-dom";
import Explorer from "../../assets/images/explorer.svg"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const AddServerFive = () => {
    const navigate = useNavigate()

    return (
        <main className="app">
          <Navbar/>
          <div className="app__container">
            <Sidebar />
            <section className="app__container__add">
              <header className="add__header">
                <span className="add__header-step">5/5</span>
                <h2 className="add__header-title">Подключение нового сервера</h2>
              </header>
              <article className="add__content">
                <span className="add__state">Status</span>
                <button className="add__button">Завершить</button>
              </article>
            </section>
          </div>
        </main>
    )
};

export default AddServerFive