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
            <Sidebar/>
            <section className="app__container_add">
              <header>
                <span>5/5</span>
                <h2>Подключение нового сервера</h2>
              </header>
              <article>
                <button>
                    <Link to="/">Завершить</Link>
                </button>
              </article>
            </section>
          </div>
        </main>
    )
};

export default AddServerFive