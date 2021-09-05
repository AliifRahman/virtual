import React from 'react';
import Header from '../../../Components/user/Header'
import Footer from '../../../Components/user/Footer'

function RegisterRoom(props) {
    return (
        <React.Fragment>
            <div>
                <div id="page">
                    <Header />
                    <main>
                    <section className="hero_in contacts">
                        <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span />Contact Us</h1>
                        </div>
                        </div>
                    </section>
                    {/*/hero_in*/}
                    <div className="contact_info">
                        <div className="container">
                        <ul className="clearfix">
                            <li>
                            <i className="pe-7s-map-marker" />
                            <h4>Address</h4>
                            <span>PO Box 97845 Baker st. 567, Los Angeles<br />California - US.</span>
                            </li>
                            <li>
                            <i className="pe-7s-mail-open-file" />
                            <h4>Email address</h4>
                            <span>support@Panagea.com - info@Panagea.com<br /><small>Monday to Friday 9am - 7pm</small></span>
                            </li>
                            <li>
                            <i className="pe-7s-phone" />
                            <h4>Contacts info</h4>
                            <span>+ 61 (2) 8093 3402 + 61 (2) 8093 3402<br /><small>Monday to Friday 9am - 7pm</small></span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/*/contact_info*/}
                    <div className="bg_color_1">
                        <div className="container margin_80_55">
                        <div>
                            <div className="col-lg-5">
                            {/* /map */}
                            </div>
                            <div className="col-lg-6">
                            <h4>Daftarkan ruangan Anda!</h4>
                            <p>Kami bisa membantu anda menyewakan ruangan kosong yang Anda miliki. Silahkan mengisi form di bawah dan kami akan menghubungi Anda.</p>
                            <div id="message-contact" />
                            <form method="post" action="assets/contact.php" id="contactform" autoComplete="off">
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Nama Lengkap</label>
                                    <input className="form-control" type="text" id="name_contact" name="name_contact" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Alamat Email</label>
                                    <input className="form-control" type="text" id="lastname_contact" name="lastname_contact" />
                                    </div>
                                </div>
                                </div>
                                {/* /row */}
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Nomor Telepon</label>
                                    <input className="form-control" type="email" id="email_contact" name="email_contact" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Nama Perusahaan (Optional)</label>
                                    <input className="form-control" type="text" id="phone_contact" name="phone_contact" />
                                    </div>
                                </div>
                                </div>
                                {/* /row */}
                                <div className="form-group">
                                <label>Alamat Detail dan Ruangan</label>
                                <textarea className="form-control" id="message_contact" name="message_contact" style={{height: 150}} defaultValue={""} />
                                </div>
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Are you human? 3 + 1 =</label>
                                    <input className="form-control" type="text" id="verify_contact" name="verify_contact" />
                                    </div>
                                </div>
                                </div>
                                <p className="add_top_30"><input type="submit" defaultValue="Daftarkan Ruangan" className="btn_1 rounded" id="submit-contact" /></p>
                            </form>
                            </div>
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
                {/* page */}
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
                <div id="toTop" />{/* Back to top button */}
            </div>

        </React.Fragment>
    );
}

    //External Link JS
    
    document.writeln("<script type='text/javascript' src='assets/user/js/mapmarker.jquery.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/user/js/mapmarker_func.jquery.js'></script>");
    
 
export default RegisterRoom;