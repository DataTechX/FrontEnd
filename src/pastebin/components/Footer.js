import React from 'react';
import "./styles/Footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col">
                   <p className="text-white-50">Copyright {new Date().getFullYear()} ChaBa Try Project</p>
                </div>
                <div className="col-auto">
                    <ul>
                        <li><a href="#" target="_blank">Discord</a>ยูทูป YoMax#2020 Developer DesingX</li>
                        <li><a href="#" target="_blank">Github</a>https://github.com/JKTheRipperTH</li>
                        <li><a href="#" target="_blank">Website</a>https://vzbot.xyz/</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}