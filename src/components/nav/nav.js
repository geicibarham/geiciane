import react from "react";
import { Link } from "react-router-dom";
import css from "./nav.css";

import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import resume from '../../geiciane-barham.pdf'
import {useState} from "react";

// geici\src\assets\geiciane-barham.pdf
function Nav() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 750){
       setColorchange(true);
     }
     else{
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
       
        <NavLink style={{fontWeight:"lighter"}}
         id="geici-nav" className="titleBtnLink" to="/">
          Geiciane Barham
        </NavLink>

      </h4>

      <ul id="nav-list">
        <Dropdown title="Dropdown button">
          <Dropdown.Toggle style={{ color: "white" }}
            variant="" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Dropdown.Item href="#hero">About</Dropdown.Item>
            <Dropdown.Item href="#projects">Projects</Dropdown.Item>
           <Dropdown.Item target="_blank" href={resume}>Resume </Dropdown.Item>
            <Dropdown.Item href="#contact">Contact</Dropdown.Item>

     


         

          </Dropdown.Menu>
        </Dropdown>



  
      </ul>
    </nav>

  );
}

export default Nav;
