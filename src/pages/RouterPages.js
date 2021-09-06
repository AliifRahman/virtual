import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from '../Components/seller-section/Navbar';
import DataRuangan from './seller-section/DataRuangan';
import DataTransaksi from './seller-section/DataTransaksi';
import HomeSeller from './seller-section/Home';
import Pesan from './seller-section/Pesan';
import TambahRuangan from './seller-section/TambahRuangan';
import TransaksiMasuk from './seller-section/TransaksiMasuk';
import Ulasan from './seller-section/Ulasan';
import HomeUser from './user/Home/Home'
import DetailRoom from './user/DetailRoom/DetailRoom';
import ListRoom from './user/ListRoom/ListRoom';
import Cart from './user/Purchase/Cart';
import Complete from './user/Purchase/Complete';
import WishList from './user/WishList/WishList';

function RouterPages(props) {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/seller">
                        <div className="fixed-nav sticky-footer">
                            <Navbar />
                            <div className="content-wrapper">
                                <div className="container-fluid">
                                    <HomeSeller />
                                </div>
                            </div>
                        </div>

                    </Route>
                    <Route path="/seller-pesan">
                        <div className="fixed-nav sticky-footer">
                            <Navbar />
                            <div className="content-wrapper">
                                <div className="container-fluid">
                                    <Pesan />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-transaksi-masuk">
                        <div className="fixed-nav sticky-footer">
                            <Navbar />
                            <div className="content-wrapper">
                                <div className="container-fluid">
                                    <TransaksiMasuk />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-data-transaksi">
                        <div className="fixed-nav sticky-footer">
                            <Navbar />
                            <div className="content-wrapper">
                                <div className="container-fluid">
                                    <DataTransaksi />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-tambah-ruangan">
                        <div className="fixed-nav sticky-footer">
                            <Navbar />
                            <div className="content-wrapper">
                                <div className="container-fluid">
                                    <TambahRuangan />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-data-ruangan">
                        <div className="fixed-nav sticky-footer">
                            <Navbar />
                            <div className="content-wrapper">
                                <div className="container-fluid">
                                    <DataRuangan />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-ulasan">
                        <div className="fixed-nav sticky-footer">
                            <Navbar />
                            <div className="content-wrapper">
                                <div className="container-fluid">
                                    <Ulasan />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path="/listroom">
                            <ListRoom />
                    </Route>
                    <Route path="/detailroom">
                            <DetailRoom />
                    </Route>
                    <Route path="/purchase">
                            <Cart />
                    </Route>
                    <Route path="/complete">
                            <Complete />
                    </Route>
                    <Route path="/wishlist">
                            <WishList />
                    </Route>
                    <Route path="/">
                            <HomeUser />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default RouterPages;