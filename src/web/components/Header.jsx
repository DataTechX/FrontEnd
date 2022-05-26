import React from 'react';
import logo from "../../fix.png";
import "./styles/Header.scss";
import {Link} from "react-router-dom";

export default function Header(props){
    return (
        <header>
            <nav className="nav-placeholder">
                <div className="container">
                    <a className="sandwich-btn" data-bs-target="#mobileMenu" data-bs-toggle="modal">
                        <span/>
                        <span/>
                        <span/>
                    </a>

                    <a href="/" className="custom-logo-link" rel="home"><img width="180"
                                                                             src={logo}
                                                                             className="logo-img"
                                                                             alt="Logo" loading="lazy"/></a>
                    <ul id="header_menu" className="navbar">
                        <li className="menu-item">
                            <Link to="/"><span>หน้าแรก</span></Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/events"><span>กิจกรรมต่างๆ</span></Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/rules"><span>กฎ</span></Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/contact"><span>ติดต่อ</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {props.children}

            <div className="mobile-menu-modal modal fade in" id="mobileMenu" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content mobile-menu">
                        <a type="button" className="btn-close" data-bs-dismiss="modal">&times;</a>

                        <div className="modal-body">
                            <ul id="mobile_menu" className="menu">
                                <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                                    <Link to="/" data-bs-dismiss="modal"><span>หน้าแรก</span></Link></li>
                                <li
                                    className="menu-item"><Link
                                    to="/events" data-bs-dismiss="modal"><span>กิจกรรมต่างๆ</span></Link></li>
                                <li
                                    className="menu-item"><Link
                                    to="/rules" data-bs-dismiss="modal"><span>กฎ</span></Link></li>
                                <li
                                    className="menu-item"><Link
                                    to="/contact" data-bs-dismiss="modal"><span>ติดต่อ</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}