import React, { useState } from "react";
import { Link } from "react-router-dom";
import Explorer from "../../assets/images/explorer.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Table = ({ data }: any) => {
  return (
    <table className="server__article__docker-table">
      <thead>
        <tr className="server__article__docker-table-row">
          <th className="server__article__docker-table-header">Containers</th>
          <th className="server__article__docker-table-header">Status</th>
          <th className="server__article__docker-table-header">Port</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, index: any) => (
          <tr key={index} className="server__article__docker-table-row">
            <td className="server__article__docker-table-cell">{row.column1}</td>
            <td className="server__article__docker-table-cell">{row.column2}</td>
            <td className="server__article__docker-table-cell">{row.column3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function Notifications() {
  return (
    <ul className="server__article__notify">
      {[1, 2, 3].map((serverId) => (
        <li key={serverId} className="notify-item">
          <div className="notify-item-left">
            <div className="notify-item-left-box"></div>
            <h5 className="notify-item-left-name">Server Up</h5>
          </div>
          <div className="notify-item-period">
            <span className="notify-item-period-data">05/04/24</span>
            <span className="notify-item-period-time">18:46</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Docker() {
  const dataFromBackend = [
    { column1: 'Grafana-1', column2: 'Exited', column3: '9100:9100' },
    { column1: 'pg-1', column2: 'Exited', column3: '9100:9100' },
    { column1: 'Node-Exporter', column2: 'Exited', column3: '9100:9100' },
  ];

  return (
    <Table data={dataFromBackend} />
  );
}

function Control() {
  return (
    <form className="server__article__control">
      <select className="server__article__control-select">
        <option value="Up" className="server__article__control-option">Up</option>
        <option value="Down" className="server__article__control-option">Down</option>
      </select>
      <button className="server__article__control-button">Запустить</button>
    </form>
  );
}


function Credentials() {
  return (
    <div className="server__article__cred">
      <h5 className="server__article__cred-head">Host Credentinals</h5>
      <span className="server__article__cred-title">Host: 192.168.23.33</span>
      <span className="server__article__cred-title">Port: 22</span>
      <h5 className="server__article__cred-head">User’s Credentinals</h5>
      <span className="server__article__cred-title">User: root</span>
      <span className="server__article__cred-title">Password: p@$$wd!</span>
    </div>
  );
}

const ServerPage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(null);

  const handleButtonClick = (pageName: any) => {
    setPage(pageName);
  };

  return (
    <main className="app">
      <Navbar />
      <div className="app__container">
        <Sidebar />
        <section className="app__container__server">
          <header className="server__header">
            <div className="server__header-content">
              <h1 className="server__header-name">My server 1</h1>
              <div className="server__header-status-box"></div>
              <span className="server__header-status">Active</span>
            </div>
            <Link to="/" className="server__header-link">
              Вернуться к серверам
            </Link>
            <p className="server__header-info">Тут типа краткая информация по серверу, что именно там крутится,
жестко разбираемся</p>
          </header>
          <article className="server__article">
            <h4 className="server__article-heading">Быстрый доступ</h4>
            <div className="server__article-buttons">
              <Link to="/" className="server__article-button-link">
                <button className="server__article-button">Repository</button>
              </Link>
              <Link to="/" className="server__article-button-link">
                <button className="server__article-button">Grafana</button>
              </Link>
              <Link to="/" className="server__article-button-link">
                <button className="server__article-button">Sentry</button>
              </Link>
            </div>
            <div className="server__article-messages">
              <nav className="server__article-nav">
                <ul className="server__article-list">
                  <li className="server__article-list-item">
                    <button onClick={() => handleButtonClick("notifications")} className="server__article-list-button">Уведомления</button>
                  </li>
                  <li className="server__article-list-item">
                    <button onClick={() => handleButtonClick("docker")} className="server__article-list-button">Docker</button>
                  </li>
                  <li className="server__article-list-item">
                    <button onClick={() => handleButtonClick("control")} className="server__article-list-button">Управление</button>
                  </li>
                  <li className="server__article-list-item">
                    <button onClick={() => handleButtonClick("credentials")} className="server__article-list-button">Credentials</button>
                  </li>
                </ul>
              </nav>
              <div className="server__article-page">
                {page === "notifications" && <Notifications />}
                {page === "docker" && <Docker />}
                {page === "control" && <Control />}
                {page === "credentials" && <Credentials />}
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default ServerPage;
