import React from 'react';
import script from './script';
import Header from '../../../Components/user/Header'
import Footer from '../../../Components/user/Footer'

function Home(props) {
    return (
        <React.Fragment>
            <div>
                <div id="page">
                    <Header />
                    <main>
                    <section className="slider">
                        <div id="slider" className="flexslider">
                        <ul className="slides">
                            <li>
                            <img src="assets/user/img/flex_slides/slide_1.jpg" alt />
                            <div className="meta">
                                <h3>Bangkok, A city that never stays the same</h3>
                                <div className="info">
                                <p><strong>220</strong> Hotels - <strong>150</strong> Restaurant</p>
                                </div>
                                <a href="tour-detail.html" className="btn_1">Read more</a>
                            </div>
                            </li>
                            <li>
                            <img src="assets/user/img/flex_slides/slide_2.jpg" alt />
                            <div className="meta">
                                <h3>Dubai, The most attractive destination</h3>
                                <div className="info">
                                <p><strong>220</strong> Hotels - <strong>150</strong> Restaurant</p>
                                </div>
                                <a href="tour-detail.html" className="btn_1">Read more</a>
                            </div>
                            </li>
                            <li>
                            <img src="assets/user/img/flex_slides/slide_3.jpg" alt />
                            <div className="meta">
                                <h3>Cairo, Traditions and culture</h3>
                                <div className="info">
                                <p><strong>220</strong> Hotels - <strong>150</strong> Restaurant</p>
                                </div>
                                <a href="tour-detail.html" className="btn_1">Read more</a>
                            </div>
                            </li>
                            <li>
                            <img src="assets/user/img/flex_slides/slide_4.jpg" alt />
                            <div className="meta">
                                <h3>Nassau, Unique beaches and horizons</h3>
                                <div className="info">
                                <p><strong>220</strong> Hotels - <strong>150</strong> Restaurant</p>
                                </div>
                                <a href="tour-detail.html" className="btn_1">Read more</a>
                            </div>
                            </li>
                            <li>
                            <img src="assets/user/img/flex_slides/slide_5.jpg" alt />
                            <div className="meta">
                                <h3>Rome, The Eternal City</h3>
                                <div className="info">
                                <p><strong>220</strong> Hotels - <strong>150</strong> Restaurant</p>
                                </div>
                                <a href="tour-detail.html" className="btn_1">Read more</a>
                            </div>
                            </li>
                        </ul>
                        <div id="icon_drag_mobile" />
                        </div>
                        <div id="carousel_slider_wp">
                        <div id="carousel_slider" className="flexslider">
                            <ul className="slides">
                            <li>
                                <img src="assets/user/img/flex_slides/slide_1_thumb.jpg" alt />
                                <div className="caption">
                                <h3>Bangkok <span>Thailand</span></h3>
                                <small>$75 per person</small>
                                </div>
                            </li>
                            <li>
                                <img src="assets/user/img/flex_slides/slide_2_thumb.jpg" alt />
                                <div className="caption">
                                <h3>Dubai <span>Emirates</span></h3>
                                <small>$75 per person</small>
                                </div>
                            </li>
                            <li>
                                <img src="assets/user/img/flex_slides/slide_3_thumb.jpg" alt />
                                <div className="caption">
                                <h3>Cairo <span>Egypt</span></h3>
                                <small>$45 per person</small>
                                </div>
                            </li>
                            <li>
                                <img src="assets/user/img/flex_slides/slide_4_thumb.jpg" alt />
                                <div className="caption">
                                <h3>Nassau <span>Bahamas</span></h3>
                                <small>$85 per person</small>
                                </div>
                            </li>
                            <li>
                                <img src="assets/user/img/flex_slides/slide_5_thumb.jpg" alt />
                                <div className="caption">
                                <h3>Rome <span>Italy</span></h3>
                                <small>$75 per person</small>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </section>
                    <div className="container container-custom margin_80_0">
                        <div className="main_title_2">
                        <span><em /></span>
                        <h2>Our Popular Tours</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                        </div>
                        <div id="reccomended" className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="box_grid">
                            <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/user/img/tour_1.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Historic</small>
                            </figure>
                            <div className="wrapper">
                                <h3><a href="tour-detail.html">Arc Triomphe</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$54</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
                            </ul>
                            </div>
                        </div>
                        {/* /item */}
                        <div className="item">
                            <div className="box_grid">
                            <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/user/img/tour_2.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Churches</small>
                            </figure>
                            <div className="wrapper">
                                <h3><a href="tour-detail.html">Notredam</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$124</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                            </ul>
                            </div>
                        </div>
                        {/* /item */}
                        <div className="item">
                            <div className="box_grid">
                            <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/user/img/tour_3.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Historic</small>
                            </figure>
                            <div className="wrapper">
                                <h3><a href="tour-detail.html">Versailles</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$25</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                            </ul>
                            </div>
                        </div>
                        {/* /item */}
                        <div className="item">
                            <div className="box_grid">
                            <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/user/img/tour_3.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Historic</small>
                            </figure>
                            <div className="wrapper">
                                <h3><a href="tour-detail.html">Versailles</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$25</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                            </ul>
                            </div>
                        </div>
                        {/* /item */}
                        <div className="item">
                            <div className="box_grid">
                            <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/user/img/tour_4.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Museum</small>
                            </figure>
                            <div className="wrapper">
                                <h3><a href="tour-detail.html">Pompidue Museum</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$45</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i className="icon_clock_alt" /> 2h 30min</li>
                                <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div></li>
                            </ul>
                            </div>
                        </div>
                        {/* /item */}
                        <div className="item">
                            <div className="box_grid">
                            <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/user/img/tour_5.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Walking</small>
                            </figure>
                            <div className="wrapper">
                                <h3><a href="tour-detail.html">Tour Eiffel</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$65</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.5</strong></div></li>
                            </ul>
                            </div>
                        </div>
                        {/* /item */}
                        </div>
                        {/* /carousel */}
                        <p className="btn_home_align"><a href="tours-grid-isotope.html" className="btn_1 rounded">View all Tours</a></p>
                        <hr className="large" />
                    </div>
                    {/* /container */}
                    <div className="container container-custom margin_30_95">
                        <section className="add_bottom_45">
                        <div className="main_title_3">
                            <span><em /></span>
                            <h2>Popular Hotels and Accommodations</h2>
                            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <a href="hotel-detail.html" className="grid_item">
                                <figure>
                                <div className="score"><strong>8.9</strong></div>
                                <img src="assets/user/img/hotel_1.jpg" className="assets/img-fluid" alt />
                                <div className="info">
                                    <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                                    <h3>Mariott Hotel</h3>
                                </div>
                                </figure>
                            </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <a href="hotel-detail.html" className="grid_item">
                                <figure>
                                <div className="score"><strong>7.9</strong></div>
                                <img src="assets/user/img/hotel_2.jpg" className="assets/img-fluid" alt />
                                <div className="info">
                                    <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                                    <h3>Concorde Hotel </h3>
                                </div>
                                </figure>
                            </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <a href="hotel-detail.html" className="grid_item">
                                <figure>
                                <div className="score"><strong>7.0</strong></div>
                                <img src="assets/user/img/hotel_3.jpg" className="assets/img-fluid" alt />
                                <div className="info">
                                    <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                                    <h3>Louvre Hotel</h3>
                                </div>
                                </figure>
                            </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <a href="hotel-detail.html" className="grid_item">
                                <figure>
                                <div className="score"><strong>8.9</strong></div>
                                <img src="assets/user/img/hotel_4.jpg" className="assets/img-fluid" alt />
                                <div className="info">
                                    <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                                    <h3>Park Yatt Hotel</h3>
                                </div>
                                </figure>
                            </a>
                            </div>
                            {/* /grid_item */}
                        </div>
                        {/* /row */}
                        <a href="hotels-grid-isotope.html"><strong>View all (157) <i className="arrow_carrot-right" /></strong></a>
                        </section>
                        {/* /section */}
                        <section className="add_bottom_45">
                        <div className="main_title_3">
                            <span><em /></span>
                            <h2>Popular Restaurants</h2>
                            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <a href="restaurant-detail.html" className="grid_item">
                                <figure>
                                <div className="score"><strong>8.5</strong></div>
                                <img src="assets/user/img/restaurant_1.jpg" className="assets/img-fluid" alt />
                                <div className="info">
                                    <h3>Da Alfredo</h3>
                                </div>
                                </figure>
                            </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <a href="restaurant-detail.html" className="grid_item">
                                <figure>
                                <div className="score"><strong>7.9</strong></div>
                                <img src="assets/user/img/restaurant_2.jpg" className="assets/img-fluid" alt />
                                <div className="info">
                                    <h3>Slow Food</h3>
                                </div>
                                </figure>
                            </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <a href="restaurant-detail.html" className="grid_item">
                                <figure>
                                <div className="score"><strong>7.5</strong></div>
                                <img src="assets/user/img/restaurant_3.jpg" className="assets/img-fluid" alt />
                                <div className="info">
                                    <h3>Bella Napoli</h3>
                                </div>
                                </figure>
                            </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                            <a href="restaurant-detail.html" className="grid_item">
                                <figure>
                                <div className="score"><strong>9.0</strong></div>
                                <img src="assets/user/img/restaurant_4.jpg" className="assets/img-fluid" alt />
                                <div className="info">
                                    <h3>Marcus</h3>
                                </div>
                                </figure>
                            </a>
                            </div>
                            {/* /grid_item */}
                        </div>
                        {/* /row */}
                        <a href="restaurants-grid-isotope.html"><strong>View all (157) <i className="arrow_carrot-right" /></strong></a>
                        </section>
                        {/* /section */}
                        <div className="banner mb-0">
                        <div className="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                            <div>
                            <small>Adventure</small>
                            <h3>Your Perfect<br />Advenure Experience</h3>
                            <p>Activities and accommodations</p>
                            <a href="adventure.html" className="btn_1">Read more</a>
                            </div>
                        </div>
                        {/* /wrapper */}
                        </div>
                        {/* /banner */}
                    </div>
                    {/* /container */}
                    <div className="bg_color_1">
                        <div className="container margin_80_55">
                        <div className="main_title_2">
                            <span><em /></span>
                            <h3>News and Events</h3>
                            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            <a className="box_news" href="#0">
                                <figure><img src="assets/user/img/news_home_1.jpg" alt />
                                <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                <li>Mark Twain</li>
                                <li>20.11.2017</li>
                                </ul>
                                <h4>Pri oportere scribentur eu</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                            </a>
                            </div>
                            {/* /box_news */}
                            <div className="col-lg-6">
                            <a className="box_news" href="#0">
                                <figure><img src="assets/user/img/news_home_2.jpg" alt />
                                <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                <li>Jhon Doe</li>
                                <li>20.11.2017</li>
                                </ul>
                                <h4>Duo eius postea suscipit ad</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                            </a>
                            </div>
                            {/* /box_news */}
                            <div className="col-lg-6">
                            <a className="box_news" href="#0">
                                <figure><img src="assets/user/img/news_home_3.jpg" alt />
                                <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                <li>Luca Robinson</li>
                                <li>20.11.2017</li>
                                </ul>
                                <h4>Elitr mandamus cu has</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                            </a>
                            </div>
                            {/* /box_news */}
                            <div className="col-lg-6">
                            <a className="box_news" href="#0">
                                <figure><img src="assets/user/img/news_home_4.jpg" alt />
                                <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                <li>Paula Rodrigez</li>
                                <li>20.11.2017</li>
                                </ul>
                                <h4>Id est adhuc ignota delenit</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                            </a>
                            </div>
                            {/* /box_news */}
                        </div>
                        {/* /row */}
                        <p className="btn_home_align"><a href="blog.html" className="btn_1 rounded">View all news</a></p>
                        </div>
                        {/* /container */}
                    </div>
                    {/* /bg_color_1 */}
                    <div className="call_section">
                        <div className="container clearfix">
                        <div className="col-lg-5 col-md-6 float-right wow" data-wow-offset={250}>
                            <div className="block-reveal">
                            <div className="block-vertical" />
                            <div className="box_1">
                                <h3>Enjoy a GREAT travel with us</h3>
                                <p>Ius cu tamquam persequeris, eu veniam apeirian platonem qui, id aliquip voluptatibus pri. Ei mea primis ornatus disputationi. Menandri erroribus cu per, duo solet congue ut. </p>
                                <a href="#0" className="btn_1 rounded">Read more</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*/call_section*/}
                    </main>
                    {/* /main */}
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
    document.writeln("<script type='text/javascript' src='assets/js/jquery.flexslider.js></script>");
    document.writeln("<script type='text/javascript' src='assets/js/CustomHome.js'></script>");

export default Home;