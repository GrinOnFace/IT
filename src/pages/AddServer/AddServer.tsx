import React, { useState } from "react";
import { Link } from "react-router-dom";
import Explorer from "../../assets/images/explorer.svg"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddServer = () => {
    const navigate = useNavigate()

    return (
        <main className="app">
          <Navbar/>
          <div className="app__container">
            <nav className="app__container_side">
              <h3>Меню</h3>
              <ul>
                <li>
                  <Link to="/#">
                    <button>
                      <Explorer width={"15px"} height={"15px"} style={{paddingRight:"5px"}}/>
                      Сервера
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
            <section className="app__container_add">
              <header>
                <span>1/5</span>
                <h2>Подключение нового сервера</h2>
              </header>
              <article>
                <label htmlFor="name">Название</label>
                <input type="text" id="name" placeholder="My server"/>
                <label htmlFor="description">Описание</label>
                <textarea name="text" id="description"></textarea>
                <Link to="/addServerTwo">
                  <button>Следующий шаг</button>
                </Link>
              </article>
            </section>
          </div>
        </main>
    )
};

export default AddServer