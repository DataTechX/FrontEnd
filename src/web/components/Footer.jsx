import React from 'react';

import logo from "../../logo.gif";
import "./styles/Footer.scss";
import { Link } from "react-router-dom";

export default function Footer(){
    return (

        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-widget">
                        <div className="social">
                            <a href="/" className="custom-logo-link" rel="home">
                                <img width="350" src={logo} className="custom-logo" alt="Footer Logo" loading="lazy"/>
                            </a>
                        </div>
                    </div>
                    <div className="footer-widget contact-links">
                       <ul>
                           <li>
                           บริการ
                           </li>
                           <li>
                               <i className="bi bi-file-text"/>
                               <a href="#!">
                                   <div className="details">
                                       <span>งงอะ</span>
                                   </div>
                               </a>
                            </li>
                           <li>
                           <i className="bi bi-cpu"/>
                           <a href="#">
                           <div className="details">
                           <span>งงอะ</span>
                           </div>
                           </a>
                           </li>
                       </ul>
                    </div>
                    <div className="footer-widget">
                       <ul className="menu">
                           <li>เกี่ยวกับ</li>
                           <li className="menu-item"><a href="/rules"><span className="title">กฏ</span></a></li>
                           <li className="menu-item"><a href="/privacy-policy"><span className="title">นโยบายความเป็นส่วนตัว</span></a></li>
                       </ul>
                    </div>
                    {/* <div className="footer-widget">
                        <ul className="menu">
                            <li>Menu</li>
                            <li className="menu-item"><Link to="/"><span className="title">หน้าแรก</span></Link></li>
                            <li className="menu-item"><Link to="/events"><span className="title">กิจกรรม</span></Link></li>
                            <li className="menu-item"><Link to="/rules"><span className="title">กฏปิติบัต</span></Link></li>
                            <li className="menu-item"><Link to="/contact"><span className="title">ติดต่อ</span></Link></li>
                        </ul>
                </div> */}
                    {/* </div> */}
                </div>
            </div>
            <div className="bottom-bar">
                <div className="container">
                    <a href="#">
                        <div className="back-to-top">
                            <i className="fas fa-angle-up"/>
                        </div>
                    </a>
                    <div className="copyright">
                        <p>
                            <a href="/">ยูทูป YoMax#2020 Developer DesingX</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
)
}