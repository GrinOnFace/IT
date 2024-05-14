import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const AddServerTwo = () => {
  const navigate = useNavigate();

  return (
    <main className="app">
      <Navbar />
      <div className="app__container">
        <Sidebar />
        <section className="app__container__add">
          <header className="add__header">
            <span className="add__header-step">2/5</span>
            <h2 className="add__header-title">Подключение нового сервера</h2>
          </header>
          <article className="add__content">
            <label className="add__label" htmlFor="url">URL</label>
            <input className="add__input" type="text" id="url" placeholder="https://iu7.gitlab.com" />
            <label className="add__label" htmlFor="username">Username</label>
            <input className="add__input" type="text" id="username" placeholder="my_username" />
            <label className="add__label" htmlFor="accessToken">Access Token</label>
            <input className="add__input" type="password" id="accessToken" placeholder="*********" />
            <Link className="add__link" to="/addServerThree">
              <button className="add__button">Следующий шаг →</button>
            </Link>
          </article>
        </section>
      </div>
    </main>
  );
};

export default AddServerTwo;
