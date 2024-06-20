import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./header.scss"; 

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <a href="/" className="logo">MovieT</a>
        <ul className="nav-links">
          <li>Trang chủ</li>
          <li>Phim</li>
          <li>Mới & Phổ biến</li>
          <li>Danh sách của tôi</li>
          <li>Trình duyệt theo ngôn ngữ</li>
        </ul>
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <button className="auth-link">Register</button>
        <button className="auth-link login">Login</button>
      </div>
    </div>
  );
}

export default Header;
