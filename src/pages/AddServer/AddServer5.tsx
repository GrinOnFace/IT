import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tantalum from "../../assets/images/TANTALUM.png"
import Notification from "../../assets/images/notification.svg"
import Setting from "../../assets/images/settings.svg"
import Logout from "../../assets/images/login.svg"
import Explorer from "../../assets/images/explorer.svg"
import { useNavigate } from "react-router-dom";

const AddServer5 = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("Девопсер Девопсерский");
    const [role, setRole] = useState("Developer");

    return (
        <main className="app">
          <header className="app__header">
            <img src={Tantalum} alt="Tantalum" className="app__header_img" onClick={() => navigate('/')}/>
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
            <section className="app__container_add">
              
            </section>
          </div>
        </main>
    )
};

export default AddServer5