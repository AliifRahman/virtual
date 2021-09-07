import React from 'react'
import Header from '../../../components/user/Header'
import Footer from '../../../components/user/Footer'
import { NavLink } from 'react-router-dom';

function DetailRoom(){
    return (
        <React.Fragment>
            <div>
                <div>
                    <Header />
                        <main>
                        <section className="hero_in tours_detail">
                            <div className="wrapper">
                                <div className="container">
                                <h1 className="fadeInUp"><span />Room detail page</h1>
                                </div>
                                <span className="magnific-gallery">
                                <a href="assets/user/img/room-1.jpg" className="btn_photos" title="Photo title" data-effect="mfp-zoom-in">View photos</a>
                                <a href="assets/user/img/room-2.jpg" title="Photo title" data-effect="mfp-zoom-in" />
                                <a href="assets/user/img/room-3.jpg" title="Photo title" data-effect="mfp-zoom-in" />
                                </span>
                            </div>
                        </section>
                        <div className="bg_color_1"><a href="img/gallery/tour_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in">
                        </a><nav className="secondary_nav sticky_horizontal"><a href="img/gallery/tour_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in">
                            </a><div className="container"><a href="img/gallery/tour_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in">
                            </a><ul className="clearfix"><a href="img/gallery/tour_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in">
                                </a><li><a href="img/gallery/tour_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in" /><a href="#description" className="active">Description</a></li>
                                <li><a href="#reviews">Reviews</a></li>
                                <li><a href="#sidebar">Booking</a></li>
                            </ul>
                            </div>
                        </nav>
                        <div className="container margin_90_35">
                            <div className="row">
                            <div className="col-lg-8">

                                <section id="description">
                                <h2>Deskripsi</h2>
                                <p>Ruang 8003 ini terletak di Menara Citicon. Ruangan ini memiliki design ruangan yang modern dan minimalis membuat ruangan terasa nyaman dan segar. Ruangan ini sangat cocok bagi Anda yang ingin melakukan meeting dengan klien.
                                    Berada di daerah Slipi berdekatan dengan pusat perbelanjaan elite Mall Taman Anggrek, Mall Central Park, dan Mall Neo Soho. Gedung ini dekat dengan Halte Transjakarta yang dapat memudahkan Anda untuk sampai ke gedung
                                    ini. Selain untuk meeting, Anda dapat menggunakan ruangan tersebut untuk Konsultasi,Bimbel,Psikotest, dan Interview.</p>
                                <hr />
                                <h3>Jam Operasional</h3>
                                <ul className="cbp_tmtimeline">
                                    <li>
                                    <div className="cbp_tmtime" ><span>8 Jam</span><span>Senin</span>
                                    </div>
                                    <div className="cbp_tmicon">
                                        1
                                    </div>
                                    <div className="cbp_tmlabel">
                                        <h4>Pukul 08.00 - 17.00</h4>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="cbp_tmtime" ><span>8 Jam</span><span>Selasa</span>
                                    </div>
                                    <div className="cbp_tmicon">
                                        2
                                    </div>
                                    <div className="cbp_tmlabel">
                                        <h4>Pukul 08.00 - 17.00</h4>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="cbp_tmtime" ><span>8 Jam</span><span>Rabu</span>
                                    </div>
                                    <div className="cbp_tmicon">
                                        3
                                    </div>
                                    <div className="cbp_tmlabel">
                                        <h4>Pukul 08.00 - 17.00</h4>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="cbp_tmtime"><span>8 Jam</span><span>Kamis</span>
                                    </div>
                                    <div className="cbp_tmicon">
                                        4
                                    </div>
                                    <div className="cbp_tmlabel">
                                        <h4>Pukul 08.00 - 17.00</h4>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="cbp_tmtime" ><span>8 Jam</span><span>Jum'at</span>
                                    </div>
                                    <div className="cbp_tmicon">
                                        5
                                    </div>
                                    <div className="cbp_tmlabel">
                                        <h4>Pukul 08.00 - 17.00</h4>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="cbp_tmtime"><span>Tutup</span><span>Sabtu</span>
                                    </div>
                                    <div className="cbp_tmicon">
                                        6
                                    </div>
                                    <div className="cbp_tmlabel">
                                        <h4>Tutup</h4>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="cbp_tmtime" ><span>Tutup</span><span>Minggu</span>
                                    </div>
                                    <div className="cbp_tmicon">
                                        7
                                    </div>
                                    <div className="cbp_tmlabel">
                                        <h4>Tutup</h4>
                                    </div>
                                    </li>
                                </ul>
                                <hr />
                                <h3>Fasilitas</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                    <ul className="bullets">
                                        <li>Dolorem mediocritatem</li>
                                        <li>Mea appareat</li>
                                        <li>Prima causae</li>
                                        <li>Singulis indoctum</li>
                                    </ul>
                                    </div>
                                    <div className="col-lg-6">
                                    <ul className="bullets">
                                        <li>Timeam inimicus</li>
                                        <li>Oportere democritum</li>
                                        <li>Cetero inermis</li>
                                        <li>Pertinacia eum</li>
                                    </ul>
                                    </div>
                                </div>
                                {/* /row */}
                                <hr />
                                <h3>Location</h3>
                                <div id="map" className="map map_single add_bottom_30" />
                                {/* End Map */}
                                </section>
                                {/* /section */}
                                <section id="reviews">
                                <h2>Reviews</h2>
                                <div className="reviews-container">
                                    <div className="row">
                                    <div className="col-lg-3">
                                        <div id="review_summary">
                                        <strong>8.5</strong>
                                        <em>Superb</em>
                                        <small>Based on 4 reviews</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="row">
                                        <div className="col-lg-10 col-9">
                                            <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
                                        </div>
                                        {/* /row */}
                                        <div className="row">
                                        <div className="col-lg-10 col-9">
                                            <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
                                        </div>
                                        {/* /row */}
                                        <div className="row">
                                        <div className="col-lg-10 col-9">
                                            <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
                                        </div>
                                        {/* /row */}
                                        <div className="row">
                                        <div className="col-lg-10 col-9">
                                            <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
                                        </div>
                                        {/* /row */}
                                        <div className="row">
                                        <div className="col-lg-10 col-9">
                                            <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: 0}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
                                        </div>
                                        {/* /row */}
                                    </div>
                                    </div>
                                    {/* /row */}
                                </div>
                                <hr />
                                <div className="reviews-container">
                                    <div className="review-box clearfix">
                                    <figure className="rev-thumb"><img src="assets/user/img/avatar1.jpg" alt />
                                    </figure>
                                    <div className="rev-content">
                                        <div className="rating">
                                        <i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                                        </div>
                                        <div className="rev-info">
                                        Admin – April 03, 2016:
                                        </div>
                                        <div className="rev-text">
                                        <p>
                                            Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* /review-box */}
                                    <div className="review-box clearfix">
                                    <figure className="rev-thumb"><img src="assets/user/img/avatar2.jpg" alt />
                                    </figure>
                                    <div className="rev-content">
                                        <div className="rating">
                                        <i className="icon-star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                                        </div>
                                        <div className="rev-info">
                                        Ahsan – April 01, 2016:
                                        </div>
                                        <div className="rev-text">
                                        <p>
                                            Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* /review-box */}
                                    <div className="review-box clearfix">
                                    <figure className="rev-thumb"><img src="assets/user/img/avatar3.jpg" alt />
                                    </figure>
                                    <div className="rev-content">
                                        <div className="rating">
                                        <i className="icon-star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                                        </div>
                                        <div className="rev-info">
                                        Sara – March 31, 2016:
                                        </div>
                                        <div className="rev-text">
                                        <p>
                                            Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* /review-box */}
                                </div>
                                {/* /review-container */}
                                </section>
                                {/* /section */}
                                <hr />
                                <div className="add-review">
                                <h5>Leave a Review</h5>
                                <form>
                                    <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Name and Lastname *</label>
                                        <input type="text" name="name_review" id="name_review" placeholder className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Email *</label>
                                        <input type="email" name="email_review" id="email_review" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Rating </label>
                                        <div className="custom-select-form">
                                        <select name="rating_review" id="rating_review" className="wide">
                                            <option value={1}>1 (lowest)</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5} selected>5 (medium)</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10 (highest)</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label>Your Review</label>
                                        <textarea name="review_text" id="review_text" className="form-control" style={{height: 130}} defaultValue={""} />
                                    </div>
                                    <div className="form-group col-md-12 add_top_20">
                                        <input type="submit" defaultValue="Submit" className="btn_1" id="submit-review" />
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            {/* /col */}
                            <aside className="col-lg-4" id="sidebar">
                                <h2>Louvre</h2>
                                <p>Ruang Kantor dengan kapasitas 2 orang</p>
                                <div className="box_detail booking">
                                <div className="price">
                                    <span>RP5.667.200 <small>/bulan</small></span>
                                    <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
                                </div>
                                <div className="form-group input-dates">
                                    <input className="form-control" type="text" name="dates" placeholder="Tanggal" />
                                    <i className="icon_calendar" />
                                </div>
                                <NavLink to="/purchase" className="btn_1 full-width purchase">Purchase</NavLink>
                                <a href="wishlist.html" className="btn_1 full-width outline wishlist"><i className="icon_heart" /> Add to wishlist</a>
                                <div className="text-center"><small>No money charged in this step</small></div>
                                </div>
                                <ul className="share-buttons">
                                <li><a className="fb-share" href="#0"><i className="social_facebook" /> Share</a></li>
                                <li><a className="twitter-share" href="#0"><i className="social_twitter" /> Tweet</a></li>
                                <li><a className="gplus-share" href="#0"><i className="social_googleplus" /> Share</a></li>
                                </ul>
                            </aside>
                            </div>
                            {/* /row */}
                        </div>
                        {/* /container */}
                        </div>
                        {/* /bg_color_1 */}
                    </main>
                    {/*/main*/}
                    <Footer />
                    </div>
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
        </React.Fragment>
    )
}

export default DetailRoom;