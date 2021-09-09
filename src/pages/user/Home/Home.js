import React from 'react';
import Header from '../../../Components/user/Header';
import Footer from '../../../Components/user/Footer';
import script from './script';

function Home(props) {
    return (
        <React.Fragment>
        <div>

            <div>
                <Header />

        <main>
            <section className="slider">
                <div id="slider" className="flexslider">	
                <ul className="slides">
                    <li>
                    <img src="assets/user/img/flex_slides/bg1.jpeg" alt />
                    <div className="meta">
                        <h3>Sewa Ruang Sesuai Kebutuhan Anda Dengan Mudah</h3>
                        <div className="info">
                        <p><strong>Tersedia Ruang Meeting, Paket Meeting, Kantor, Coworking Space, Ruang Acara yang dapat Anda pilih</strong></p>
                        </div>
                       
                    </div>
                    </li>
                    <li>
                    <img src="assets/user/img/flex_slides/bg2.jpeg" alt />
                    <div className="meta">
                        <h3><b style={{color: 'red'}}>PROMO</b> JASA PEMBUATAN PT</h3>
                        <div className="info">
                        <p><b style={{color: 'white'}} /></p><h4><b style={{color: 'white'}}>GRATIS VIRTUAL OFFICE </b></h4><p />
                        </div>
                        <h3>  1 TAHUN</h3>
                        <a href="tour-detail.html" className="btn_1">CARI TAHU SEKARANG</a>
                    </div>
                    </li>
                    <li>
                    <img src="assets/user/img/flex_slides/bg3.jpg" alt />
                    <div className="meta">
                        <h3 style={{color: 'red'}}><b>PROMO</b></h3><h4 style={{color: 'white'}}><b>VIRTUAL OFFICE</b></h4>
                        <div className="info">
                        <p><b style={{color: 'white'}} /></p><h3><b style={{color: 'white'}}>HEMAT 60%</b></h3><p />
                        </div>
                        <a href="tour-detail.html" className="btn_1">CARI TAHU SEKARANG</a>
                    </div>
                    </li>
                    <li>
                    <img src="assets/user/img/flex_slides/bg4.jpeg" alt />
                    <div className="meta">
                        <h3><b style={{color: 'red'}}>BARU</b></h3><h4><b style={{color: 'white'}}>TEMPAT INTIMATE WEDDING</b></h4>
                        <div className="info">
                        <p /><h3><b style={{color: 'white'}}>HARGA SPESIAL</b></h3><p />
                        </div>
                        <a href="tour-detail.html" className="btn_1">CARI TAHU SEKARANG</a>
                    </div>
                    </li>
                    <li>
                    <img src="assets/user/img/flex_slides/bg5.jpeg" alt />
                    <div className="meta">
                        <h3><b style={{color: 'red'}}>BARU</b></h3><h4><b style={{color: 'white'}}>TEMPAT PHOTOSHOOT &amp; VIDEOSHOOT</b></h4>
                        <div className="info">
                        <p /><h3><b style={{color: 'white'}}>HARGA SPESIAL</b></h3><p />
                        </div>
                        <a href="tour-detail.html" className="btn_1">CARI TAHU SEKARANG</a>
                    </div>
                    </li>
                    <li>
                    <img src="assets/user/img/flex_slides/bg5.jpeg" alt />
                    <div className="meta">
                        <h3><b style={{color: 'red'}}>BARU</b></h3><h4><b style={{color: 'white'}}>TEMPAT VIDEO CONFERENCE</b></h4>
                        <div className="info">
                        <p /><h3><b style={{color: 'white'}}>HARGA SPESIAL</b></h3><p />
                        </div>
                        <a href="tour-detail.html" className="btn_1">CARI TAHU SEKARANG</a>
                    </div>
                    </li>
                    <li>
                    <img src="assets/user/img/flex_slides/bg5.jpeg" alt />
                    <div className="meta">
                        <h3><b style={{color: 'red'}}>PROMO</b></h3><h4><b style={{color: 'white'}}>RUANG KANTOR DI PLUIT</b></h4>
                        <div className="info">
                        <p /><h3><b style={{color: 'white'}}>HARGA SPESIAL</b></h3><p />
                        </div>
                        <a href="tour-detail.html" className="btn_1">CARI TAHU SEKARANG</a>
                    </div>
                    </li>
                    <li>
                    <img src="assets/user/img/flex_slides/bg5.jpeg" alt />
                    <div className="meta">
                        <h3><b style={{color: 'red'}}>PROMO</b></h3><h4><b style={{color: 'white'}}>RUANG KANTOR CENTENNIAL TOWER</b></h4>
                        <div className="info">
                        <p /><h3><b style={{color: 'white'}}>HEMAT 50%</b></h3><p />
                        </div>
                        <a href="tour-detail.html" className="btn_1">CARI TAHU SEKARANG</a>
                    </div>
                    </li>
                    <li>
                    <img src="assets/user/img/flex_slides/bg5.jpeg" alt />
                    <div className="meta">
                        <h3><b style={{color: 'red'}}>PROMO</b></h3><h4><b style={{color: 'white'}}>RUANG KANTOR GADING SEPRONG</b></h4>
                        <div className="info">
                        <p /><h3><b style={{color: 'white'}}>GRATIS 3 BULAN</b></h3><p />
                        </div>
                        <a href="tour-detail.html" className="btn_1">CARI TAHU SEKARANG</a>
                    </div>
                    </li>
                </ul>
                <div id="icon_drag_mobile" />
                </div>
                <div id="carousel_slider_wp">
                <div id="carousel_slider" className="flexslider">
                    <ul className="slides">
                    <li>
                        <img src="assets/user/img/flex_slides/bg1.jpeg" alt />
                        <div className="caption">
                        <h3> <span /></h3>
                        <small />
                        </div>
                    </li>
                    <li>
                        <img src="assets/user/img/flex_slides/bg2.jpeg" alt />
                        <div className="caption">
                        <h3><span /></h3>
                        <small />
                        </div>
                    </li>
                    <li>
                        <img src="assets/user/img/flex_slides/bg3.jpg" alt />
                        <div className="caption">
                        <h3><span /></h3>
                        <small />
                        </div>
                    </li>
                    <li>
                        <img src="assets/user/img/flex_slides/bg4.jpeg" alt />
                        <div className="caption">
                        <h3><span /></h3>
                        <small />
                        </div>
                    </li>
                    <li>
                        <img src="assets/user/img/flex_slides/bg5.jpeg" alt />
                        <div className="caption">
                        <h3><span /></h3>
                        <small />
                        </div>
                    </li>
                    <li>
                        <img src="assets/user/img/flex_slides/bg4.jpeg" alt />
                        <div className="caption">
                        <h3><span /></h3>
                        <small />
                        </div>
                    </li>
                    <li>
                        <img src="assets/user/img/flex_slides/bg5.jpeg" alt />
                        <div className="caption">
                        <h3><span /></h3>
                        <small />
                        </div>
                    </li>
                    <li>
                        <img src="assets/user/img/flex_slides/bg4.jpeg" alt />
                        <div className="caption">
                        <h3><span /></h3>
                        <small />
                        </div>
                    </li>
                    <li>
                        <img src="assets/user/img/flex_slides/bg5.jpeg" alt />
                        <div className="caption">
                        <h3><span /></h3>
                        <small />
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </section>
            <div className="container margin_80_55">
                <div className="search-engine">
                {/* <h3>Book unique experiences</h3>
                                <p>Expolore top rated tours, hotels and restaurants around the world</p> */}
                <form>
                    <div className="row no-gutters custom-search-input-2">
                    <div className="col-lg-3">
                        <div className="form-group">
                        <input className="form-control" type="text" placeholder="Hotel, City..." />
                        <i className="icon_pin_alt" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="form-group">
                        <input className="form-control" type="text" name="dates" placeholder="When.." />
                        <i className="icon_calendar" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="panel-dropdown active">
                        <a href="#">Guests <span className="qtyTotal">1</span></a>
                        <div className="panel-dropdown-content">
                            {/* Quantity Buttons */}
                            <div className="qtyButtons">
                            <label>Adults</label>
                            <div className="qtyDec" /><input type="text" name="qtyInput" defaultValue={1} />
                            <div className="qtyInc" />
                            </div>
                            <div className="qtyButtons">
                            <label>Childrens</label>
                            <div className="qtyDec" /><input type="text" name="qtyInput" defaultValue={0} />
                            <div className="qtyInc" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <select className="wide">
                        <option>Tipe Ruang</option>	
                        <option>Ruang Meeting</option>
                        <option>Ruang Acara</option>
                        <option>Ruang Meeting</option>
                        <option>Ruang Acara</option>
                        <option>Semua Tipe</option>
                        </select>
                    </div>
                    <div className="col-lg-2">
                        <input type="submit" className="btn_search" defaultValue="Search" />
                    </div>
                    </div>
                    {/* /row */}
                </form>
                </div>
            </div>
            <div className="container container-custom margin_80_0">
                <div className="main_title_2">
                <span><em /></span>
                <h2>Rekomendasi ruang meeting strategis</h2>
                <p>Cari, Booking, dan mulai hari produktif Anda dalam hitungan menit</p>
                </div>
                <div id="reccomended" className="owl-carousel owl-theme">
                <div className="item">
                    <div className="box_grid">
                    <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="tour-detail.html"><img src="assets/user/img/flex_slides/bg5.jpeg" className="img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                        <small>Rp 10.099.000 /fullday</small>
                    </figure>
                    <div className="wrapper">
                        <h3><a href="tour-detail.html" /></h3>
                        <p>Online seminar Package Studio 1 di SP Space</p>
                        <span className="price">From <strong>Rp 6.699.000</strong> /halfday</span>
                    </div>
                    <ul>
                        <li><i className="icon_clock_alt" /> 1h 30min</li>
                        <li><div className="score"><span>Space<em>30 People</em></span><strong>8.9</strong></div></li>
                    </ul>
                    </div>
                </div>
                {/* /item */}
                <div className="item">
                    <div className="box_grid">
                    <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="tour-detail.html"><img src="assets/user/img/flex_slides/bg5.jpeg" className="img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                        <small>Rp 440.000 /halfday</small>
                    </figure>
                    <div className="wrapper">
                        <h3><a href="tour-detail.html" /></h3>
                        <p>Parang di Graha Niaga Thamrin</p>
                        <span className="price">From <strong>Rp 120.000</strong> /jam</span>
                    </div>
                    <ul>
                        <li><i className="icon_clock_alt" /> 1h 30min</li>
                        <li><div className="score"><span>Space<em>16 People</em></span><strong>7.0</strong></div></li>
                    </ul>
                    </div>
                </div>
                {/* /item */}
                <div className="item">
                    <div className="box_grid">
                    <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="tour-detail.html"><img src="assets/user/img/flex_slides/bg5.jpeg" className="img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                        <small />
                    </figure>
                    <div className="wrapper">
                        <h3><a href="tour-detail.html" /></h3>
                        <p>Duke Room, Lt. 17 di Cyber 2 Tower</p>
                        <span className="price">From <strong>Rp 247.500</strong> /jam</span>
                    </div>
                    <ul>
                        <li><i className="icon_clock_alt" /> 1h 30min</li>
                        <li><div className="score"><span>Space<em>10 - 15 People</em></span><strong>7.0</strong></div></li>
                    </ul>
                    </div>
                </div>
                {/* /item */}
                <div className="item">
                    <div className="box_grid">
                    <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="tour-detail.html"><img src="assets/user/img/flex_slides/bg5.jpeg" className="img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                        <small />
                    </figure>
                    <div className="wrapper">
                        <h3><a href="tour-detail.html" /></h3>
                        <p>18A di Sampoerna Strategic Square</p>
                        <span className="price">From <strong>Rp 200.000</strong> /jam</span>
                    </div>
                    <ul>
                        <li><i className="icon_clock_alt" /> 1h 30min</li>
                        <li><div className="score"><span>Space<em>12 people</em></span><strong>7.0</strong></div></li>
                    </ul>
                    </div>
                </div>
                {/* /item */}
                <div className="item">
                    <div className="box_grid">
                    <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="tour-detail.html"><img src="assets/user/img/flex_slides/bg5.jpeg" className="img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                        <small>Rp 1.400.000 /halfday</small>
                    </figure>
                    <div className="wrapper">
                        <h3><a href="tour-detail.html" /></h3>
                        <p>Bosphorus di Menara 165</p>
                        <span className="price">From <strong>Rp 350.000</strong> /jam</span>
                    </div>
                    <ul>
                        <li><i className="icon_clock_alt" /> 2h 30min</li>
                        <li><div className="score"><span>Space<em>14 People</em></span><strong>9.0</strong></div></li>
                    </ul>
                    </div>
                </div>
                {/* /item */}
                <div className="item">
                    <div className="box_grid">
                    <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="tour-detail.html"><img src="assets/user/img/flex_slides/bg5.jpeg" className="img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                        <small>Rp. 200.000 /halfday</small>
                    </figure>
                    <div className="wrapper">
                        <h3><a href="tour-detail.html" /></h3>
                        <p>Meeting Room 1 di Cikajang Building</p>
                        <span className="price">From <strong>Rp 50.000</strong> /jam</span>
                    </div>
                    <ul>
                        <li><i className="icon_clock_alt" /> 1h 30min</li>
                        <li><div className="score"><span>Space<em>6 People</em></span><strong>7.5</strong></div></li>
                    </ul>
                    </div>
                </div>
                {/* /item */}
                </div>
                {/* /carousel */}
                {/* <p class="btn_home_align"><a href="tours-grid-isotope.html" class="btn_1 rounded">View all Tours</a></p>
                        <hr class="large"> */}
            </div>
            {/* /container */}
            {/* ======= Testimonials Section ======= */}
            <section id="testimonials" className="testimonials">
                <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Testimonials</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                    quidem hic quas.</p>
                </div>
                <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left" /> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                            risus at semper.
                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left" /> Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure
                            amet legam anim culpa.
                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left" /> Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint
                            minim.
                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left" /> Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem
                            dolore labore illum veniam.
                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left" /> Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse
                            veniam culpa fore nisi cillum quid.
                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        </div>
                    </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
                </div>
            </section>
            {/* End Testimonials Section */}
            <div className="container-custom margin_80_55">
                <section className="add_bottom_45"> 
                <div className="main_title_2">
                    <span><em /></span>
                    {/* <hr class="large"> */}
                    <h2>Mengapa memilih <b>PANAGEA ?</b></h2>
                    <p>Cari tahu 4 alasan mengapa Anda harus memilih <b>PANAGEA</b> dibandingkan yang lainnya</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                    <a className="box_topic" href="#0">
                        <span><i className="pe-7s-wallet" /></span>
                        <h3>Transaksi online mudah dan terpecaya</h3>
                        <p>Kemudahan pembayaran dengan sistem SSL menjamin 100% keamanan transaksi yang dilakukan melalui bank transfer, kartu kredit, dan internet banking</p>
                    </a>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <a className="box_topic" href="#0">
                        <i className="pe-7s-global" />
                        <h3>Real-time booking</h3>
                        <p>Anda dapat melakukan pemesanan 24/7 tanpa perlu melakukan konfirmasi tambahan</p>
                    </a>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <a className="box_topic" href="#0">
                        <i className="pe-7s-help2" />
                        <h3>Price match guarantee</h3>
                        <p>Seluruh harga sewa yang tercantum adalah harga final tanpa biaya tambahan lainnya dan dijamin harga terbaik</p>
                    </a>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <a className="box_topic" href="#0">
                        <i className="pe-7s-users" />
                        <h3>Mitra partner terlengkap di Indonesia</h3>
                        <p>Ruangan meeting, ruang kantor, co-working space, ruang training, dan ruang acara terlengkap</p>
                    </a>
                    </div>
                </div>
                </section> 
            </div>
            
            <div className="container container-custom margin_80_55 bg_color1">
                <section className="add_bottom_45">
                <div className="main_title_2">
                    <span><em /></span>
                    <h2>Pilihan tipe ruangan yang tersedia</h2>
                    <p>Pencarian sewa ruang untuk berbagai kebutuhan anda</p>
                </div>
                <div id="reccomended_adventure" className="owl-carousel owl-theme">
                    <div className="item">
                    <a href="adventure-detail.html" className="grid_item_adventure">
                        <figure>
                        <div className="score"><strong>7.9</strong></div>
                        <img src="assets/user/img/flex_slides/bg7.jpg" className="img-fluid" alt />
                        <div className="info">
                            <h3>Ruang Meeting</h3>
                            <em>Sewa ruangan dengan harga per jam, untuk berbagai kebutuhan anda</em>									
                        </div>
                        </figure>
                    </a>
                    </div>
                    <div className="item">
                    <a href="adventure-detail.html" className="grid_item_adventure">
                        <figure>
                        <div className="score"><strong>9.0</strong></div>
                        <img src="assets/user/img/flex_slides/bg7.jpg" className="img-fluid" alt />
                        <div className="info">
                            <h3>Ruang Kantor</h3>
                            <em>Sewa ruang kantor, mulai per bulan hingga tahunan</em>									
                        </div>
                        </figure>
                    </a>
                    </div>
                    <div className="item">
                    <a href="adventure-detail.html" className="grid_item_adventure">
                        <figure>
                        <div className="score"><strong>9.5</strong></div>
                        <img src="assets/user/img/flex_slides/PaketMeeting.jpg" className="img-fluid" alt />
                        <div className="info">
                            <h3>Paket Meeting</h3>
                            <em>Paket meeting dengan harga per orang, termasuk coffee break atau makanan</em>									
                        </div>
                        </figure>
                    </a>
                    </div>
                    <div className="item">
                    <a href="adventure-detail.html" className="grid_item_adventure">
                        <figure>
                        <div className="score"><strong>9.0</strong></div>
                        <img src="assets/user/img/flex_slides/CoworkingSpace.jpg" className="img-fluid" alt />
                        <div className="info">
                            <h3>Ruang Acara</h3>
                            <em>Ruang acara untuk kegiatan yang lebih besar, dengan harga per jam</em>									
                        </div>
                        </figure>
                    </a>
                    </div>
                    <div className="item">
                    <a href="adventure-detail.html" className="grid_item_adventure">
                        <figure>
                        <div className="score"><strong>9.0</strong></div>
                        <img src="assets/user/img/flex_slides/CoworkingSpace.jpg" className="img-fluid" alt />
                        <div className="info">
                            <h3>Coworking Space</h3>
                            <em>Temukan cowoking desk dari ratusan lokasi terbaik</em>									
                        </div>
                        </figure>
                    </a>
                    </div>
                    <div className="item">
                    <a href="adventure-detail.html" className="grid_item_adventure">
                        <figure>
                        <div className="score"><strong>8.5</strong></div>
                        <img src="assets/user/img/flex_slides/VirtualOffice.jpg" className="img-fluid" alt />
                        <div className="info">
                            <h3>Virtual Office</h3>
                            <em>Sewa alat kantor tanpa menyewa ruangan, untuk budget yang lebih hemat</em>									
                        </div>
                        </figure>
                    </a>
                    </div>
                    <div className="item">
                    <a href="adventure-detail.html" className="grid_item_adventure">
                        <figure>
                        <div className="score"><strong>8.5</strong></div>
                        <img src="assets/user/img/flex_slides/VirtualOffice.jpg" className="img-fluid" alt />
                        <div className="info">
                            <h3>Virtual Office &amp; Jasa Pembuatan PT</h3>
                            <em>Cara mudah dan cepat untuk membuat perusahaan baru dan termasuk alamat legalitas dengan Virtual Office</em>									
                        </div>
                        </figure>
                    </a>
                    </div>
                </div>
                
                </section>

            </div>
            
            </main>

                    <Footer />
                </div>

            </div>        
	
        </React.Fragment>
    );
}

export default Home;