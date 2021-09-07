import React from 'react'
import Header from '../../../components/user/Header'
import Footer from '../../../components/user/Footer'

function Complete(){
    return(
        <React.Fragment>
            <div>
                <div>
                <Header />
                <main>
                    <div className="hero_in cart_section last">
                    <div className="wrapper">
                        <div className="container">
                        <div className="bs-wizard clearfix">
                            <div className="bs-wizard-step">
                            <div className="text-center bs-wizard-stepnum">Pembayaran</div>
                            <div className="progress">
                                <div className="progress-bar" />
                            </div>
                            <a href="cart-2.html" className="bs-wizard-dot" />
                            </div>
                            <div className="bs-wizard-step active">
                            <div className="text-center bs-wizard-stepnum">Selesai</div>
                            <div className="progress">
                                <div className="progress-bar" />
                            </div>
                            <a href="#0" className="bs-wizard-dot" />
                            </div>
                        </div>
                        {/* End bs-wizard */}
                        <div id="confirm">
                            <h4>Order completed!</h4>
                            <p>You'll receive a confirmation email at mail@example.com</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/*/hero_in*/}
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

export default Complete;