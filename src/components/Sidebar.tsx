import React from "react";
import { Link } from "react-router-dom";
import ExplorerIcon from "../assets/images/explorer.svg";

const Sidebar = () => {

    return (
        <nav className="side-menu">
            <h3 className="side-menu__title">Меню</h3>
            <ul className="side-menu__list">
                <li className="side-menu__item">
                    <Link to="/" className="side-menu__link">
                        <button className="side-menu__button">
                            <ExplorerIcon width={"15px"} height={"15px"} style={{paddingRight: "5px"}}/>
                            Сервера
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
