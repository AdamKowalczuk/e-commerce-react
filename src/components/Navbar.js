import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5 cursive-font">
            <Link to="/" className="nav-link">
              Nerd Shop
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <NavbarButton>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My cart
          </NavbarButton>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainGreen);
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.6rem;
    text-transform: capitalize;
  }
`;

const NavbarButton = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainDark);
  border-color:${(props) =>
    props.cart ? "var(--mainRed)" : "var(--mainDark)"};
  color:${(prop) => (prop.cart ? "var(--mainRed)" : "var(--mainDark)")};
  border-radius: 0.5rem;
  padding 0.2rem 0.5rem;
  cursor:pointer;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.5s ease-in-out;
&:hover{
    background:${(prop) => (prop.cart ? "var(--mainRed)" : "var(--mainDark)")};
    color:var(--mainLight);
}
&:focus{
    outline:none;
}
`;
