import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Context from "../../Context/Context";
import { LuMail } from "react-icons/lu";
import "./Navbar.css";
import { BiLogOutCircle } from "react-icons/bi";
import React, { useContext } from "react";

function NavComp() {
  const navigate = useNavigate();
  const location = useLocation();
  const contextData = useContext(Context);
  const [selectedLink, setSelectedLink] = useState(location.pathname);

  function handleLogout() {
    localStorage.clear();
    contextData.setNavFlag(false);
    navigate("/login");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="">
          <Navbar.Brand onClick={() => navigate("/")} className="overflow-auto">
            <span className="space-x-3">
              <LuMail
                color="#00FFFF"
                size={32}
                style={{ marginRight: "8px" }}
              />
              <b>Bulk Email Services</b>
            </span>
          </Navbar.Brand>
          {contextData.navFlag ? (
            <>
              {" "}
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => {
                    navigate("/");
                    setSelectedLink("/");
                  }}
                  style={{
                    color: selectedLink === "/" ? "MediumSeaGreen" : "gray",
                  }}>
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/compose");
                    setSelectedLink("/compose");
                  }}
                  style={{
                    color:
                      selectedLink === "/compose" ? "MediumSeaGreen" : "gray",
                  }}>
                  Compose
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/graph");
                    setSelectedLink("/graph");
                  }}
                  style={{
                    color:
                      selectedLink === "/graph" ? "MediumSeaGreen" : "gray",
                  }}>
                  Graph
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/log");
                    setSelectedLink("/log");
                  }}
                  style={{
                    color: selectedLink === "/log" ? "MediumSeaGreen" : "gray",
                  }}>
                  Log
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/settings");
                    setSelectedLink("/settings");
                  }}
                  style={{
                    color:
                      selectedLink === "/settings" ? "MediumSeaGreen" : "gray",
                  }}>
                  Settings
                </Nav.Link>
              </Nav>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="tooltip"
                onClick={handleLogout}
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="This top tooltip is themed via CSS variables.">
                {window.innerWidth < 770 ? <BiLogOutCircle /> : "LogOut"}
              </button>
            </>
          ) : (
            <>
              <Nav className="me-auto"></Nav>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default NavComp;
