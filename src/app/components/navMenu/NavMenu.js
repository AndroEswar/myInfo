import React, { Component } from "react";
import MenuItems from "./MenuItems";
import { Button } from "../button/Button";
import "./NavMenu.css"

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <nav>
        <div className="logo">Eswar</div>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn" onClick={this.handleClick}>
          <i className="fas fa-bars"></i>
        </label>
        <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
        </ul>
      </nav>
    );
  }
}

export default NavMenu;

{/* <nav className="NavbarItems">
        <h1 className="navbar-logo">Eswar<i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav> */}