import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <header className="headerComponent">
        <nav>
          <Link to="/">
            <img src={logo} />
          </Link>
          <div>
            <Link to="/" className="navLink">Accueil</Link>
            <Link to="/about" className="navLink">A Propos</Link>
          </div>
        </nav>
      </header>
    );
  }
}
