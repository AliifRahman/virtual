import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <div>
            <header className="header map_view menu_fixed">
                <div id="preloader">
                    <div data-loader="circle-side" />
                </div>
                <div id="logo">
                    <a href="index.html">
                    <img src="assets/user/img/logo_sticky.png" width={150} height={36} data-retina="true" alt />
                    </a>
                </div>
                <ul id="top_menu">
                    <li><a href="#sign-in-dialog" id="sign-in" className="login" title="Sign In">Sign In</a></li>
                    <li><NavLink to="/wishlist" className="wishlist_bt_top" title="Your wishlist">Your wishlist</NavLink></li>
                </ul>
                <a href="#menu" className="btn_mobile">
                    <div className="hamburger hamburger--spin" id="hamburger">
                    <div className="hamburger-box">
                        <div className="hamburger-inner" />
                    </div>
                    </div>
                </a>
                <nav id="menu" className="main-menu">
                    <ul>
                    <li><span><a href="#0">Meeting &amp; Event</a></span>
                        <ul>
                        <li><NavLink to="/listroom">Ruang Meeting</NavLink></li>
                        <li><NavLink to="/listroom">Ruang Acara</NavLink></li>
                        </ul>
                    </li>
                    <li><span><a href="#0">Workspace</a></span>
                        <ul>
                        <li><NavLink to="/listroom">Ruang Kantor</NavLink></li>
                        <li><NavLink to="/listroom">Coworking Desk</NavLink></li>
                        <li><NavLink to="/listroom">Co-living</NavLink></li>
                        </ul>
                    </li>
                    <li><span><a href="#0">Virtual Office</a></span>
                        <ul>
                        <li><NavLink to="/listroom">Virtual Office</NavLink></li>
                        <li><NavLink to="/listroom">Virtual Office &amp; Pendirian PT</NavLink></li>
                        <li><NavLink to="/listroom">Pendirian PT</NavLink></li>
                        </ul>
                    </li>
                    <li><span><a href="#">Paket Meeting</a></span></li>
                    <li><span><a href="#">Daftarkan Ruangan</a></span></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header;