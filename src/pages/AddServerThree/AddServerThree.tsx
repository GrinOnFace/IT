import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const AddServerThree = () => {
  const navigate = useNavigate();

  return (
    <main className="app">
      <Navbar />
      <div className="app__container">
        <Sidebar />
        <section className="app__container__add">
          <header className="add__header">
            <span className="add__header-step">3/5</span>
            <h2 className="add__header-title">Подключение нового сервера</h2>
          </header>
          <article className="add__content">
            <label className="add__label" htmlFor="IP">Server IP</label>
            <input className="add__input" type="text" id="IP" placeholder="172.20.16.2" />
            <label className="add__label" htmlFor="SSH">SSH Port</label>
            <input className="add__input" type="text" id="SSH" placeholder="22" />
            <label className="add__label" htmlFor="SSHUser">SSH Username</label>
            <input className="add__input" type="text" id="SSHUser" placeholder="root" />
            <label className="add__label" htmlFor="SSHPassword">SSH Password</label>
            <input className="add__input" type="password" id="SSHPassword" placeholder="***********" />
            <Link className="add__link" to="/addServerFour">
              <button className="add__button">Следующий шаг →</button>
            </Link>
          </article>
        </section>
      </div>
    </main>
  );
};

export default AddServerThree;
