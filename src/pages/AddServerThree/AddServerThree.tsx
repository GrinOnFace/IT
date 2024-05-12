import React, { useState } from "react";
import { Link } from "react-router-dom";
import Explorer from "../../assets/images/explorer.svg"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddServerThree = () => {
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
                <span>3/5</span>
                <h2>Подключение нового сервера</h2>
              </header>
              <article>
                <label htmlFor="IP">Server IP</label>
                <input type="text" id="IP" placeholder="172.20.16.2"/>
                <label htmlFor="SSH">SSH Port</label>
                <input type="text" id="SSH" placeholder="22"/>
                <label htmlFor="SSHUser">Access Token</label>
                <input type="text" id="SSHUser" placeholder="root"/>
                <label htmlFor="SSHpassword">SSH Password</label>
                <input type="password" id="SSHUser" placeholder="***********"/>
                <Link to="/addServerFour">
                  <button>Следующий шаг</button>
                </Link>
              </article>
            </section>
          </div>
        </main>
    )
};

export default AddServerThree