import react from "react";
import { Link } from "react-router-dom";
import css from "./nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DrawerNav from "./drawer";
import resume from '../../geiciane-barham.pdf'

function Nav() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 50) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
  </style>

  return (

    <nav id="main-nav" className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <h4 id="title">

        <NavLink style={{ fontWeight: "lighter" }}
          role="link"
          tabIndex={'0'}
          id="geici-nav" className="titleBtnLink" to="/">
          Geiciane Barham
        </NavLink>

      </h4>
  
      <ul className="desktop-nav">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#projects">Contact</a>
        </li>

        <li ><a target="_blank" href={resume}>Resume</a></li>
      </ul>
      <ul id="nav-list">
        <button id="contact-button"><a href="/form">Contact Me!</a></button>
        <a id="menu" href="#" data-target="mobile-nav"
          className="sidenav-trigger hide-on-large-only"><DrawerNav /></a>
      </ul>
    </nav>

  );
}

export default Nav;
