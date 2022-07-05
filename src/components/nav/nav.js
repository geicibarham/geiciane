import react from "react";
import { Link } from "react-router-dom";
import css from "./nav.css";

import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import resume from '../../geiciane-barham.pdf'
import { useState } from "react";
import DrawerNav from "./drawer";
// geici\src\assets\geiciane-barham.pdf
function Nav() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 750) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
  </style>

  return (

    <nav id="main-nav" className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <h4 id="title">

        <NavLink style={{ fontWeight: "lighter" }}
          id="geici-nav" className="titleBtnLink" to="/">
          Geiciane Barham
        </NavLink>

      </h4>
     
      <ul id="nav-list">
      <NavLink id="contact-button" to="/form">Contact Me!</NavLink>
      <a id="menu" href="#" data-target="mobile-nav"
        className="sidenav-trigger hide-on-large-only"><DrawerNav /></a>
      </ul>
    </nav>

  );
}

export default Nav;
