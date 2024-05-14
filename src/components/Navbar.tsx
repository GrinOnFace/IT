import React, { useState } from "react";
import { Link } from "react-router-dom";
import TantalumLogo from "../assets/images/TANTALUM.png";
import NotificationIcon from "../assets/images/notification.svg";
import SettingsIcon from "../assets/images/settings.svg";
import LogoutIcon from "../assets/images/login.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("Девопсер Девопсерский");
    const [userRole, setUserRole] = useState("Developer");

    return (
        <header className="navbar">
            <img
                src={TantalumLogo}
                alt="Tantalum"
                className="navbar__logo"
                onClick={() => navigate('/')}
            />
            <div className="navbar__actions">
                <Link to={"/notifications"}>
                    <button className="navbar__action">
                        <NotificationIcon width={"20px"} height={"20px"} />
                    </button>
                </Link>
                <Link to={"/settings"}>
                    <button className="navbar__action">
                        <SettingsIcon width={"20px"} height={"20px"} />
                    </button>
                </Link>
                <div className="navbar__user">
                    <h5 className="navbar__user-name">{userName}</h5>
                    <p className="navbar__user-role">{userRole}</p>
                </div>
                <Link to={"/login"}>
                    <button className="navbar__action">
                        <LogoutIcon width={"20px"} height={"20px"} />
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
