import React, { useState } from "react";
import { Link } from "react-router-dom";
import Explorer from "../../assets/images/explorer.svg"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddServerTwo = () => {
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
                <span>2/5</span>
                <h2>Подключение нового сервера</h2>
              </header>
              <article>
                <label htmlFor="name">URL</label>
                <input type="text" id="name" placeholder="https://iu7.gitlab.com"/>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="my_username"/>
                <label htmlFor="username">Access Token</label>
                <input type="password" id="username" placeholder="*********"/>
                <Link to="/addServerThree">
                  <button>Следующий шаг</button>
                </Link>
              </article>
            </section>
          </div>
        </main>
    )
};

export default AddServerTwo