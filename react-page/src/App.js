import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavBrand to="/"></NavBrand>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <NavMenu className="navbar-nav">
              <NavItem to="/" className="nav-link" aria-current="page">
                Home
              </NavItem>
              <NavItem to="/about" className="nav-link">
                About
              </NavItem>
            </NavMenu>
          </div>
        </div>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

const Nav = styled.nav`
  background-color: #fff;
  height: 8vh;
  width: 100%;
  padding: 1rem;
`;

const NavBrand = styled(Link)`
  display: block;
  width: 150px;
  height: 50px;
  background-image: url("/media/nav.png");
  background-repeat: no-repeat;
  background-size: contain;
  transition: background-image 0.3s ease-in-out;
  &:hover {
    background-image: url("/media/navhover.png");
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  margin-right: 2vw;
  color: #d53a5b;
  font-size: 1.5rem;
  font-weight: 500;
  &:hover {
    color: #57bcca;
    text-decoration: none;
  }
  &.active {
    font-weight: bold;
    color: #0d6efd;
  }
`;
