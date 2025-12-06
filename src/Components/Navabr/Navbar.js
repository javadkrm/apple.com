import React from 'react'
import './Navbar.css'

import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BsBag } from 'react-icons/bs';

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
    <div className="container">
        <Link to="/" className="navbar-brand d-flex">
            <FaApple />
        </Link>
        <button className="navbar-toggler" type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center w-100 justify-content-sm-start flex-grow-1 pe-3">
                    <li className="nav-item text-md-start mx-auto">
                        <Link className="nav-link" to="/store">Store</Link>
                    </li>
                    <li className="nav-item text-md-start mx-auto">
                        <Link className="nav-link" to="/Mac">Mac</Link>
                    </li>
                    <li className="nav-item text-md-start mx-auto">
                        <Link className="nav-link" to="/iPad">iPad</Link>
                    </li>
                    <li className="nav-item text-md-start mx-auto">
                        <Link className="nav-link" to="/iPhone">iPhone</Link>
                    </li>
                    <li className="nav-item text-md-start mx-auto">
                        <Link className="nav-link" to="/Watch">Watch</Link>
                    </li>
                    <li className="nav-item text-md-start mx-auto">
                        <Link className="nav-link" to="/Vision">Vision</Link>
                    </li>
                    <li className="nav-item text-md-start mx-auto">
                        <Link className="nav-link" to="/Airpods">Airpods</Link>
                    </li>

                    <li className="nav-item text-md-start mx-auto">
                        <Link className="nav-link" to="/search">
                            <IoIosSearch className="fs-4" />
                        </Link>
                    </li>

                    <li className="nav-item text-md-start mx-auto">
                        <Link className="nav-link" to="/bag">
                            <BsBag className="fs-4" />
                        </Link>
                    </li>

                </ul>
            </div>
        </div>

    </div>
</nav>

        </div>
    )
}
