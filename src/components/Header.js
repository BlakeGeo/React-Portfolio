import React from 'react';
import { NavLink } from 'react-router-dom';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#navBar");
const navLink = document.querySelectorAll("#link-navbar");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const Header = () => (
  <header>
    <div>BG</div>
    <div id="navBar" className="mdl-navigation">
      <NavLink id="link-navbar" className="mdl-navigation__link" to="/">Home</NavLink>
      <NavLink id="link-navbar" className="mdl-navigation__link" to="/about">About</NavLink>
      <NavLink id="link-navbar" className="mdl-navigation__link" to="/projects">Projects</NavLink>
      <NavLink id="link-navbar" className="mdl-navigation__link" to="/curriculumvitae">CV</NavLink>
      <NavLink id="link-navbar" className="mdl-navigation__link" to="/contact">Contact</NavLink>
    </div>
    <div class="hamburger">
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</div>
  </header>
)

export default Header;