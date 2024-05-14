import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const AddServerFour = () => {
  const navigate = useNavigate();

  return (
    <main className="app">
      <Navbar />
      <div className="app__container">
        <Sidebar />
        <section className="app__container__add">
          <header className="add__header">
            <span className="add__header-step">4/5</span>
            <h2 className="add__header-title">Подключение нового сервера</h2>
          </header>
          <article className="add__content">
            <label className="add__label" htmlFor="SentryURL">Sentry URL</label>
            <input className="add__input" type="text" id="SentryURL" placeholder="https://bmstu-on.sentry.io/issues/" />
            <Link className="add__link" to="/addServerFive">
              <button className="add__button">Следующий шаг →</button>
            </Link>
          </article>
        </section>
      </div>
    </main>
  );
};

export default AddServerFour;
