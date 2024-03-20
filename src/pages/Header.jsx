import React from "react";
import navListData from "../data/navListData";
import NavListData from "../components/NavListData";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        cinema
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavListData key={nav._id} nav={nav} />
        ))}
      </ul>
    </header>
  );
}

export default Header;
