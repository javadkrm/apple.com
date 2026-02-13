import React from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import "./Navbar.css";

import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";

export default function Navbar({onBagClick}) {

  const closeOffcanvas = () => {
    const el = document.getElementById("offcanvasNavbar");
    if (!el) return;

    const instance =
      Offcanvas.getInstance(el) || new Offcanvas(el);

    instance.hide();
  };

  const OffcanvasLink = ({ to, children, className = "" }) => (
    <Link
      to={to}
      className={`nav-link ${className}`}
      onClick={closeOffcanvas}
    >
      {children}
    </Link>
  );

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex">
          <FaApple />
        </Link>

        <button
          className="d-lg-none ms-2"
          style={{ background: "none", border: "none", cursor: "pointer" }}
          aria-label="Toggle shopping bag small-screen"
          onClick={onBagClick}
        >
          <BsBag className="fs-6" />
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeOffcanvas}
            />
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav align-items-center w-100 flex-grow-1 pe-3">

              <li className="nav-item mx-auto">
                <OffcanvasLink to="/store">Store</OffcanvasLink>
              </li>

              <li className="nav-item mx-auto">
                <OffcanvasLink to="/mac">Mac</OffcanvasLink>
              </li>

              <li className="nav-item mx-auto">
                <OffcanvasLink to="/ipad">iPad</OffcanvasLink>
              </li>

              <li className="nav-item mx-auto">
                <OffcanvasLink to="/iphone">iPhone</OffcanvasLink>
              </li>

              <li className="nav-item mx-auto">
                <OffcanvasLink to="/watch">Watch</OffcanvasLink>
              </li>

              <li className="nav-item mx-auto">
                <OffcanvasLink to="/vision">Vision</OffcanvasLink>
              </li>

              <li className="nav-item mx-auto">
                <OffcanvasLink to="/airpods">AirPods</OffcanvasLink>
              </li>

              <li className="nav-item mx-auto">
                <OffcanvasLink to="/search">
                  <IoIosSearch className="fs-5" />
                </OffcanvasLink>
              </li>
              <li className="nav-item mx-auto d-none d-lg-block">
                <button
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                  aria-label="Toggle shopping bag"
                  onClick={onBagClick}
                >
                  <BsBag className="fs-6" />
                </button>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}

