import React from 'react'
import Header from '../../../components/user/Header'
import Footer from '../../../components/user/Footer'
import { NavLink } from 'react-router-dom';

function ListRoom(){
    return (
        <React.Fragment>
            <div>
                <div>
                    <Header />
                        <main>
                            <div className="container-fluid full-height">
                            <div className="row row-height">
                                <div className="col-lg-7 content-left order-md-last order-sm-last order-last">
                                <div id="results_map_view">
                                    <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-10">
                                        <h4><strong>12</strong> Hasil pencarian</h4>
                                        </div>
                                        <div className="col-2">
                                        <a href="#0" className="search_map btn_search_map_view" />
                                        {/* /open search panel */}
                                        </div>
                                    </div>
                                    {/* /row */}
                                    <div className="search_map_wp">
                                        <div className="custom-search-input-2 map_view">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Ketik lokasi yang di inginkan" />
                                            <i className="icon_pin_alt" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="dates" placeholder="Tanggal" />
                                            <i className="icon_calendar" />
                                        </div>
                                        <select className="wide">
                                            <option>Semua Kapasitas</option>	
                                            <option>1-5 orang</option>
                                            <option>6-10 orang</option>
                                            <option>11-20 orang</option>
                                            <option>21-30 orang</option>
                                            <option>31-50 orang</option>
                                            <option>51-100 orang</option>
                                            <option>100+</option>
                                        </select>
                                        <input type="submit" defaultValue="Search" />
                                        </div>
                                    </div>
                                    {/* /search_map_wp */}
                                    </div>
                                    {/* /container */}
                                </div>
                                {/* /results */}
                                <div className="filters_listing version_3">
                                    <div className="container-fluid">
                                    <ul className="clearfix">
                                        <li>
                                        <div className="switch-field">
                                            <input type="radio" id="all" name="listing_filter" defaultValue="all" defaultChecked />
                                            <label htmlFor="all">Semua</label>
                                            <input type="radio" id="popular" name="listing_filter" defaultValue="popular" />
                                            <label htmlFor="popular">Populer</label>
                                            <input type="radio" id="latest" name="listing_filter" defaultValue="latest" />
                                            <label htmlFor="latest">Terbaru</label>
                                        </div>
                                        </li>
                                        <li><a className="btn_filt_map" data-toggle="collapse" href="#filters" aria-expanded="false" aria-controls="filters" data-text-swap="Less filters" data-text-original="More filters">Lainnya</a></li>
                                    </ul>
                                    </div>
                                    {/* /container */}
                                </div>
                                {/* /filters */}
                                <div className="collapse map_view" id="filters">
                                    <div className="container-fluid margin_30_5">
                                    <h6>Kategori</h6>
                                    <div className="filter_type">
                                        <ul>
                                        <div className="row">
                                            <div className="col-lg-6">
                                            <li>
                                                <label className="container_check">Coworking space <small>(945)</small>
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                </label>
                                            </li>
                                            </div>
                                            <div className="col-lg-6">
                                            <li>
                                                <label className="container_check">Kantor <small>(45)</small>
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                </label>
                                            </li>
                                            </div>
                                            <div className="col-lg-6">
                                            <li>
                                                <label className="container_check">Virtual Office <small>(30)</small>
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                </label>
                                            </li>
                                            </div>
                                            <div className="col-lg-6">
                                            <li>
                                                <label className="container_check">Virtual Office &amp; Pembuatan Office <small>(25)</small>
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                </label>
                                            </li>
                                            </div>
                                            <div className="col-lg-6">
                                            <li>
                                                <label className="container_check">Coliving <small>(56)</small>
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                </label>
                                            </li>
                                            </div>
                                            <div className="col-lg-6">
                                            <li>
                                                <label className="container_check">Pendirian PT <small>(56)</small>
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                </label>
                                            </li>
                                            </div>
                                        </div>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                        <div className="add_bottom_15">
                                            <h6>Harga</h6>
                                            <div className="distance"> Range harga Rp<span /> </div>
                                            <input type="range" min={0} max={10000000} step={200000} defaultValue={1000000} data-orientation="horizontal" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                        <div className="filter_type add_bottom_30">
                                            <h6>Rating</h6>
                                            <ul>
                                            <li>
                                                <label className="container_check">Superb 9+ <small>(25)</small>
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                </label>
                                            </li>
                                            <li>
                                                <label className="container_check">Very Good 8+ <small>(26)</small>
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                </label>
                                            </li>
                                            <li>
                                                <label className="container_check">Good 7+ <small>(25)</small>
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                </label>
                                            </li>
                                            <li>
                                                <label className="container_check">Pleasant 6+ <small>(12)</small>
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                </label>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    {/* /row */}
                                    </div>
                                </div>
                                {/* /Filters */}
                                <div className="box_list map_view">
                                    <div className="row no-gutters add_top_20">
                                    <div className="col-lg-6 col-md-6 item-group">
                                        <figure>
                                        <small>Small Virtual Office</small>
                                        <NavLink to="/detailroom"><img src="assets/user/img/room-1.jpg" className="img-fluid" alt width={800} height={533} /></NavLink>
                                        </figure>
                                        <div className="wrapper">
                                        <a href="#0" className="wish_bt" />
                                        <h3><NavLink to="/detailroom">Louvre</NavLink></h3>
                                        <span className="price">Mulai <strong>Rp. 500.000</strong> /per bulan</span>
                                        </div>
                                        <ul>
                                        <li>
                                            <a href="#0" onclick="onHtmlClick('Marker',2)" className="address">On Map</a>
                                        </li>
                                        <li>
                                            <div className="score"><span>Superb<em>20 Reviews</em></span><strong>8.9</strong></div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 item-group">
                                        <figure>
                                        <small>Medium Virtual Office</small>
                                        <a href="tour-detail.html"><img src="assets/user/img/room-2.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                        </figure>
                                        <div className="wrapper">
                                        <a href="#0" className="wish_bt" />
                                        <h3><a href="tour-detail.html">Adamantine</a></h3>
                                        <span className="price">Mulai <strong>Rp. 750.000</strong> /per bulan</span>
                                        </div>
                                        <ul>
                                        <li>
                                            <a href="#0" onclick="onHtmlClick('Marker',2)" className="address">On Map</a>
                                        </li>
                                        <li>
                                            <div className="score"><span>Superb<em>31 Reviews</em></span><strong>8.1</strong></div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 item-group">
                                        <figure>
                                        <small>Silver Office</small>
                                        <a href="tour-detail.html"><img src="assets/user/img/room-3.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                        </figure>
                                        <div className="wrapper">
                                        <a href="#0" className="wish_bt" />
                                        <h3><a href="tour-detail.html">Broum</a></h3>
                                        <span className="price">Mulai <strong>Rp. 500.000</strong> /per bulan</span>
                                        </div>
                                        <ul>
                                        <li>
                                            <a href="#0" onclick="onHtmlClick('Marker',2)" className="address">On Map</a>
                                        </li>
                                        <li>
                                            <div className="score"><span>Superb<em>29 Reviews</em></span><strong>9.5</strong></div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 item-group">
                                        <figure>
                                        <small>Gold Office</small>
                                        <a href="tour-detail.html"><img src="assets/user/img/room-3.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                        </figure>
                                        <div className="wrapper">
                                        <a href="#0" className="wish_bt" />
                                        <h3><a href="tour-detail.html">Brindalin</a></h3>
                                        <span className="price">Mulai <strong>Rp. 1.200.000</strong> /per bulan</span>
                                        </div>
                                        <ul>
                                        <li>
                                            <a href="#0" onclick="onHtmlClick('Marker',2)" className="address">On Map</a>
                                        </li>
                                        <li>
                                            <div className="score"><span>Superb<em>38 Reviews</em></span><strong>8.9</strong></div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 item-group">
                                        <figure>
                                        <small>Diamond Office</small>
                                        <a href="tour-detail.html"><img src="assets/user/img/room-1.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                        </figure>
                                        <div className="wrapper">
                                        <a href="#0" className="wish_bt" />
                                        <h3><a href="tour-detail.html">Muller</a></h3>
                                        <span className="price">Mulai <strong>Rp. 4.500.000</strong> /per bulan</span>
                                        </div>
                                        <ul>
                                        <li>
                                            <a href="#0" onclick="onHtmlClick('Marker',2)" className="address">On Map</a>
                                        </li>
                                        <li>
                                            <div className="score"><span>Superb<em>11 Reviews</em></span><strong>9.1</strong></div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 item-group">
                                        <figure>
                                        <small>Copper Office</small>
                                        <a href="tour-detail.html"><img src="assets/user/img/room-2.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                        </figure>
                                        <div className="wrapper">
                                        <a href="#0" className="wish_bt" />
                                        <h3><a href="tour-detail.html">Grinder</a></h3>
                                        <span className="price">Mulai <strong>Rp. 300.000</strong> /per bulan</span>
                                        </div>
                                        <ul>
                                        <li>
                                            <a href="#0" onclick="onHtmlClick('Marker',2)" className="address">On Map</a>
                                        </li>
                                        <li>
                                            <div className="score"><span>Superb<em>46 Reviews</em></span><strong>7.9</strong></div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 item-group">
                                        <figure>
                                        <small>Common Office</small>
                                        <a href="tour-detail.html"><img src="assets/user/img/room-3.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                        </figure>
                                        <div className="wrapper">
                                        <a href="#0" className="wish_bt" />
                                        <h3><a href="tour-detail.html">Adinasara</a></h3>
                                        <span className="price">Mulai <strong>Rp. 200.000</strong> /per bulan</span>
                                        </div>
                                        <ul>
                                        <li>
                                            <a href="#0" onclick="onHtmlClick('Marker',2)" className="address">On Map</a>
                                        </li>
                                        <li>
                                            <div className="score"><span>Superb<em>350 Reviews</em></span><strong>7.7</strong></div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 item-group">
                                        <figure>
                                        <small>Ore Office</small>
                                        <a href="tour-detail.html"><img src="assets/user/img/room-2.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                        </figure>
                                        <div className="wrapper">
                                        <a href="#0" className="wish_bt" />
                                        <h3><a href="tour-detail.html">Louvre</a></h3>
                                        <span className="price">Mulai <strong>Rp. 800.000</strong> /per bulan</span>
                                        </div>
                                        <ul>
                                        <li>
                                            <a href="#0" onclick="onHtmlClick('Marker',2)" className="address">On Map</a>
                                        </li>
                                        <li>
                                            <div className="score"><span>Superb<em>27 Reviews</em></span><strong>8.9</strong></div>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                {/* /box_list */}
                                <p className="text-center add_top_30"><a href="#0" className="btn_1 rounded"><strong>Load more</strong></a></p>
                                </div>
                                {/* /content-left*/}
                                <div className="col-lg-5 map-right">
                                <div id="map" />
                                {/* map*/}
                                </div>
                                {/* /map-right*/}
                            </div>
                            {/* /row*/}
                            </div>
                            {/* /container-fluid */}
                        </main>
                        </div>
                        <div>
                        <Footer />
                        {/* Sign In Popup */}
                        <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
                            <div className="small-dialog-header">
                            <h3>Sign In</h3>
                            </div>
                            <form>
                            <div className="sign-in-wrapper">
                                <a href="#0" className="social_bt facebook">Login with Facebook</a>
                                <a href="#0" className="social_bt google">Login with Google</a>
                                <div className="divider"><span>Or</span></div>
                                <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" id="email" />
                                <i className="icon_mail_alt" />
                                </div>
                                <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" id="password" defaultValue />
                                <i className="icon_lock_alt" />
                                </div>
                                <div className="clearfix add_bottom_15">
                                <div className="checkboxes float-left">
                                    <label className="container_check">Remember me
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                    </label>
                                </div>
                                <div className="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                                </div>
                                <div className="text-center"><input type="submit" defaultValue="Log In" className="btn_1 full-width" /></div>
                                <div className="text-center">
                                Don’t have an account? <a href="#sign-up-dialog" id="sign-up">Sign up</a>
                                </div>
                                <div id="forgot_pw">
                                <div className="form-group">
                                    <label>Please confirm login email below</label>
                                    <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                                    <i className="icon_mail_alt" />
                                </div>
                                <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                                <div className="text-center"><input type="submit" defaultValue="Reset Password" className="btn_1" /></div>
                                </div>
                            </div>
                            </form>
                            {/*form */}
                        </div>
                        {/* /Sign In Popup */}
                        {/* Sign Up Popup */}
                        <div id="sign-up-dialog" className="zoom-anim-dialog mfp-hide">
                            <div className="small-dialog-header">
                            <h3>Sign Up</h3>
                            </div>
                            <div className="sign-up-wrapper">
                            <form autoComplete="off">
                                <div className="form-group">
                                <label>Your Name</label>
                                <input className="form-control" type="text" />
                                <i className="ti-user" />
                                </div>
                                <div className="form-group">
                                <label>Your Last Name</label>
                                <input className="form-control" type="text" />
                                <i className="ti-user" />
                                </div>
                                <div className="form-group">
                                <label>Your Email</label>
                                <input className="form-control" type="email" />
                                <i className="icon_mail_alt" />
                                </div>
                                <div className="form-group">
                                <label>Your password</label>
                                <input className="form-control" type="password" id="password1" />
                                <i className="icon_lock_alt" />
                                </div>
                                <div className="form-group">
                                <label>Confirm password</label>
                                <input className="form-control" type="password" id="password2" />
                                <i className="icon_lock_alt" />
                                </div>
                                <div id="pass-info" className="clearfix" />
                                <a href="#0" className="btn_1 rounded full-width add_top_30">Register Now!</a>
                                <div className="text-center add_top_10">Already have an acccount? <strong><a href="#sign-in-dialog" id="sign-in-2">Sign In</a></strong></div>
                            </form>
                            </div>
                            {/*form */}
                        </div>
                        {/* /Sign Up Popup */}
                        </div>
                </div>
            </React.Fragment>
        )
    }

export default ListRoom;