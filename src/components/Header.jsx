// Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <h1 className="text-3xl font-bold">Smart Office</h1>
      <nav className="mt-2">
        <ul className="flex">
          <NavItem link="/homepage" text="Home" />
          <NavItem link="/about" text="Sobre" />
          <NavItem link="/contact" text="Contato" />
          <NavItem link="/login" text="Login" />
        </ul>
      </nav>
    </header>
  );
};

const NavItem = ({ link, text }) => {
  return (
    <li className="mr-4">
      <NavLink
        to={link}
        className="text-white hover:text-gray-400"
        activeClassName="text-gray-400"
      >
        {text}
      </NavLink>
    </li>
  );
};

export default Header;
