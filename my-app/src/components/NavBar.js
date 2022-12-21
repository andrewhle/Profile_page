import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assests/img/logo.svg";
import icon1 from "../assests/img/nav-icon1.svg";
import icon2 from "../assests/img/nav-icon2.svg";
import icon3 from "../assests/img/nav-icon3.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    //if window scroll is true, className = "scroll", else = " "
    <Navbar expand="lg" className={scroll ? "scroll" : " "}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Project
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={icon1} alt="" />
              </a>
              <a href="#">
                <img src={icon2} alt="" />
              </a>
              <a href="#">
                <img src={icon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
