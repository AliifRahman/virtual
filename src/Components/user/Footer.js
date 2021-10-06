import React from 'react'

function Footer(){
    return(
        <footer>
            <div className="container margin_60_35">
                <div className="row">
                <div className="col-lg-5 col-md-12 p-r-5">
                    <p><img src="assets/user/img/logo_white.png" width={150} height={36} alt /></p>
                    <p>Sewa virtual office, private office, shared office dengan lokasi prestisius di Surabaya dan paket jasa pembuatan PT & CV untuk bisnismu. tingkatkan kepercayaan customermu dengan alamat kantor yang prestisius bersama Graha Office Surabaya.</p>
                    <div className="follow_us">
                    <ul>
                        <li>Follow us</li>
                        <li><a href="#0"><i className="ti-facebook" /></a></li>
                        <li><a href="#0"><i className="ti-twitter-alt" /></a></li>
                        <li><a href="#0"><i className="ti-google" /></a></li>
                        <li><a href="#0"><i className="ti-pinterest" /></a></li>
                        <li><a href="#0"><i className="ti-instagram" /></a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 ml-lg-auto">
                    <h5>Layanan</h5>
                    <ul className="links">
                    <li><a href="about.html">Download Katalog</a></li>
                    <li><a href="login.html">Jasa Pembuatan PT &amp; CV</a></li>
                    <li><a href="register.html">PAKET LENGKAP VIRTUAL OFFICE &amp; JASA PEMBUATAN PT/CV</a></li>
                    <li><a href="blog.html">PRIVATE OFFICE</a></li>
                    <li><a href="blog.html">SHARED OFFICE</a></li>
                    <li><a href="blog.html">VIRTUAL OFFICE</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5>Contact with Us</h5>
                    <ul className="contacts">
                    <li><a href="tel://61280932400"><i className="ti-mobile" />(031) 3000 2222 / 0811 52 1000</a></li>
                    <li><a href="mailto:info@Panagea.com"><i className="ti-email" />cs@grahaoffice.com</a></li>
                    </ul>
                    <div id="newsletter">
                    <h6>Dapatkan Penawaran Menarik</h6>
                    <div id="message-newsletter" />
                    <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                        <div className="form-group">
                        <input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="email_anda@" />
                        <input type="submit" defaultValue="Submit" id="submit-newsletter" />
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                {/*/row*/}
                <hr />
                <div className="row">
                <div className="col-lg-6">
                    <ul id="footer-selector">
                    <li>
                        <div className="styled-select" id="lang-selector">
                        <select>
                            <option value="English" selected>Bahasa Indonesia</option>
                            <option value="French">French</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Russian">Russian</option>
                        </select>
                        </div>
                    </li>
                    <li>
                        <div className="styled-select" id="currency-selector">
                        <select>
                            <option value="US Dollars" selected>US Dollars</option>
                            <option value="Euro">Euro</option>
                        </select>
                        </div>
                    </li>
                    <li><img src="assets/user/img/cards_all.svg" alt /></li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul id="additional_links">
                    <li><a href="#0">Terms and conditions</a></li>
                    <li><a href="#0">Privacy</a></li>
                    <li><span>© 2021 GRAHA OFFICE</span></li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;