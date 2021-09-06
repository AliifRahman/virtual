import React from 'react'
import Header from '../../../Components/user/Header'
import Footer from '../../../Components/user/Footer'
import { NavLink } from 'react-router-dom';

function Cart(){
    return(
        <React.Fragment>
            <div>
                <div>
                    <Header />
                    <main>
                        <div className="hero_in cart_section">
                        <div className="wrapper">
                            <div className="container">
                            <div className="bs-wizard clearfix">
                                <div className="bs-wizard-step clearfix active">
                                <div className="text-center bs-wizard-stepnum">Pembayaran</div>
                                <div className="progress">
                                    <div className="progress-bar" />
                                </div>
                                <a href="#0" className="bs-wizard-dot" />
                                </div>
                                <div className="bs-wizard-step disabled">
                                <div className="text-center bs-wizard-stepnum">Selesai</div>
                                <div className="progress">
                                    <div className="progress-bar" />
                                </div>
                                <a href="#0" className="bs-wizard-dot" />
                                </div>
                            </div>
                            {/* End bs-wizard */}
                            </div>
                        </div>
                        </div>
                        {/*/hero_in*/}
                        <div className="bg_color_1">
                        <div className="container margin_60_35">
                            <div className="row">
                            <div className="col-lg-8">
                                <div className="box_cart">
                                <div className="message">
                                    <p>Sudah punya akun? <a href="#0">Klik disini untuk login</a></p>
                                </div>
                                <div className="form_title">
                                    <h3><strong>1</strong>Personal Information</h3>
                                    <p>
                                    Lengkapi data dirimu.
                                    </p>
                                </div>
                                <div className="step">
                                    <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>First name</label>
                                        <input type="text" className="form-control" id="firstname_booking" name="firstname_booking" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>Last name</label>
                                        <input type="text" className="form-control" id="lastname_booking" name="lastname_booking" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" id="email_booking" name="email_booking" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>Confirm email</label>
                                        <input type="email" id="email_booking_2" name="email_booking_2" className="form-control" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>Telephone</label>
                                        <input type="text" id="telephone_booking" name="telephone_booking" className="form-control" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <hr />
                                {/*End step */}
                                <div className="form_title">
                                    <h3><strong>2</strong>Payment Information</h3>
                                    <p>
                                    Lengkapi metode pembayaran.
                                    </p>
                                </div>
                                <div className="step">
                                    <div className="form-group">
                                    <label>Name on card</label>
                                    <input type="text" className="form-control" id="name_card_bookign" name="name_card_bookign" />
                                    </div>
                                    <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                        <label>Card number</label>
                                        <input type="text" id="card_number" name="card_number" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <img src="assets/user/img/cards_all.svg" alt="Cards" className="cards-payment" />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-6">
                                        <label>Expiration date</label>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <input type="text" id="expire_month" name="expire_month" className="form-control" placeholder="MM" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <input type="text" id="expire_year" name="expire_year" className="form-control" placeholder="Year" />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label>Security code</label>
                                        <div className="row">
                                            <div className="col-4">
                                            <div className="form-group">
                                                <input type="text" id="ccv" name="ccv" className="form-control" placeholder="CCV" />
                                            </div>
                                            </div>
                                            <div className="col-8">
                                            <img src="assets/user/img/icon_ccv.gif" width={50} height={29} alt="ccv" /><small>Last 3 digits</small>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/*End row */}
                                    <hr />
                                    <h4>Or checkout with Paypal</h4>
                                    <p>
                                    Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui vocent ornatus molestie, reque fierent dissentiunt mel ea.
                                    </p>
                                    <p>
                                    <a href="#0"><img src="assets/user/img/paypal_bt.png" alt="Image" /></a>
                                    </p>
                                </div>
                                <hr />
                                {/*End step */}
                                <div id="policy">
                                    <h5>Cancellation policy</h5>
                                    <p className="nomargin">Lorem ipsum dolor sit amet, vix <a href="#0">cu justo blandit deleniti</a>, discere omittantur consectetuer per eu. Percipit repudiare similique ad sed, vix ad decore nullam ornatus.</p>
                                </div>
                                </div>
                            </div>
                            {/* /col */}
                            <aside className="col-lg-4" id="sidebar">
                                <div className="box_detail">
                                <div id="total_cart">
                                    Total <span className="float-right">69.00$</span>
                                </div>
                                <ul className="cart_details">
                                    <h5>Louvre</h5>
                                    <li>dari <span>02-11-18</span></li>
                                    <li>sampai <span>04-11-18</span></li>
                                </ul>
                                <NavLink to="/complete" className="btn_1 full-width purchase">Purchase</NavLink>
                                <div className="text-center"><small>No money charged in this step</small></div>
                                </div>
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

export default Cart;