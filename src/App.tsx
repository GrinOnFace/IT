import React, { useState } from "react";
import './App.scss'
import { Outlet, Link } from "react-router-dom";
import TANTALUM from "../src/assets/images/TANTALUM.png"
import Notification from "../src/assets/images/notification.svg"
import Setting from "../src/assets/images/settings.svg"
import Logout from "../src/assets/images/login.svg"
import Explorer from "../src/assets/images/explorer.svg"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const App = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [name, setName] = useState("Девопсер Девопсерский");
    const [role, setRole] = useState("Developer");
    
    return (
        <main className="app">
          <header className="app__header">
            <img src={TANTALUM} alt="Tantalum" className="app__header_img"/>
            <div className="app__header_buttons">
              <Link to={"/#"}>
                <button className="app__header_buttons_info">
                  <Notification width={"20px"} height={"20px"}/>
                </button>
              </Link>
              <Link to={"/#"}>
                <button className="app__header_buttons_settings">
                  <Setting width={"20px"} height={"20px"} />
                </button>
              </Link>
              <div className="app__header_user">
                <h5>{name}</h5>
                <p>{role}</p>
              </div>
              <Link to={"/login"}>
                <button className="app__header_buttons_logout">
                  <Logout width={"20px"} height={"20px"} />
                </button>
              </Link> 
            </div>
          </header>
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