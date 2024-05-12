import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import TANTALUM from "../src/assets/images/TANTALUM.png"
import Notification from "../src/assets/images/notification.svg"
import Setting from "../src/assets/images/settings.svg"
import Logout from "../src/assets/images/login.svg"
import Explorer from "../src/assets/images/explorer.svg"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

export const App = () => {
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
              <section className="app__container_section">
                <header>
                  <h2>Ваши сервера</h2>
                  <Link to={"/addServer"}>
                    <button>
                      + Add server
                    </button>
                  </Link>
                </header>
                <article>
                  <nav>
                    <ul className="app__container_section_list">
                      <li>
                        <button className="app__container_section_list_button" onClick={() => navigate("/server/5")}>
                          <span className="app__container_section_list_button_header">My server #1</span>
                          <div className="app__container_section_list_button_state">
                            <div className="app__container_section_list_button_state_box"></div>
                            <span>Active</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button className="app__container_section_list_button">
                          <span className="app__container_section_list_button_header">My server #1</span>
                          <div className="app__container_section_list_button_state">
                            <div className="app__container_section_list_button_state_box"></div>
                            <span>Active</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button className="app__container_section_list_button">
                          <span className="app__container_section_list_button_header">My server #1</span>
                          <div className="app__container_section_list_button_state">
                            <div className="app__container_section_list_button_state_box"></div>
                            <span>Active</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button className="app__container_section_list_button_add" onClick={() => navigate('/addServer')}>
                          <span>+ Add server</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </article>
              </section>
          </div>
        </main>
    )
};