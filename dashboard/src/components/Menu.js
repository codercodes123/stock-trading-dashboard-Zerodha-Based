import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handelMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const MenuClass = "menu";
  const activeMenuClass = "menu Selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handelMenuClick(0)}
            >
            <p className={selectedMenu === 0 ? activeMenuClass : MenuClass}>
              Dashboard
            </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handelMenuClick(1)}
            >
            <p className={selectedMenu === 1 ? activeMenuClass : MenuClass}>
              Orders
            </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handelMenuClick(2)}
            >
            <p className={selectedMenu === 2 ? activeMenuClass : MenuClass}>
              Holdings
            </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handelMenuClick(3)}
            >
            <p className={selectedMenu === 3 ? activeMenuClass : MenuClass}>
              Positions
            </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handelMenuClick(4)}
            >
            <p className={selectedMenu === 4 ? activeMenuClass : MenuClass}>
              Funds
            </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps "
              onClick={() => handelMenuClick(5)}
            >
            <p className={selectedMenu === 5 ? activeMenuClass : MenuClass}>
              Apps
            </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
