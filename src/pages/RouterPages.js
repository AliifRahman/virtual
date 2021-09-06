import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from '../Components/seller-section/Navbar';
import DataRuangan from './seller-section/DataRuangan';
import DataTransaksi from './seller-section/DataTransaksi';
import Home from './seller-section/Home';
import Pesan from './seller-section/Pesan';
import TambahRuangan from './seller-section/TambahRuangan';
import TransaksiMasuk from './seller-section/TransaksiMasuk';
import Ulasan from './seller-section/Ulasan';

import MessageAdmin from '../Components/MessageAdmin';
import NavbarAdmin from '../Components/NavbarAdmin';
import BookingAdmin from '../Components/BookingAdmin';
import ListingAdmin from '../Components/ListingAdmin';
import ReviewsAdmin from '../Components/ReviewsAdmin';
import BookmarksAdmin from '../Components/BookmarksAdmin';
import AddlistingAdmin from '../Components/AddlistingAdmin';
import MyprofileAdmin from '../Components/MyprofileAdmin';
import ChartsAdmin from '../Components/ChartsAdmin';
import TablesAdmin from '../Components/TablesAdmin';


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
                                    <Home />
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
        
                <Route exact path="/">
                    <NavbarAdmin/>
                </Route>
                <Route path="/messageadmin">
                    <MessageAdmin/>
                </Route>
                <Route path="/bookingadmin">
                    <BookingAdmin/>
                </Route>
                <Route path="/listingadmin">
                    <ListingAdmin/>
                </Route>
                <Route path="/reviewsadmin">
                    <ReviewsAdmin/>
                </Route>
                <Route path="/bookmarksadmin">
                    <BookmarksAdmin/>
                </Route>
                <Route path="/addlistingadmin">
                    <AddlistingAdmin/>
                </Route>
                <Route path="/myprofileadmin">
                    <MyprofileAdmin/>
                </Route>
                <Route path="/chartsadmin">
                    <ChartsAdmin/>
                </Route>
                <Route path="/tablesadmin">
                    <TablesAdmin/>
                </Route>
            </Switch>
        
        
                </Switch>
            </Router>
        </div>
    );
}

export default RouterPages;
