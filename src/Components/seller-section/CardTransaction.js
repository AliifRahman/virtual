import React from 'react';

function CardTransaction(props) {
    return (
        <li>
            <figure><img src="assets/seller-section/img/item_1.jpg" alt="" /></figure>
            <h4>Ruangan Panglima Sudirman<i className="pending">Pending</i></h4>
            <ul className="booking_list">
                <li><strong>Mulai Sewa</strong> 11 Juni 2021</li>
                <li><strong>Berakhir pada</strong> 11 April 2021</li>
                <li><strong>Total Karyawan</strong> 15 orang</li>
                <li><strong>Client</strong> Araman Sandi</li>
            </ul>
            <p><a href="#0" className="btn_1 gray"><i className="fa fa-fw fa-envelope"></i> Kirim Pesan</a></p>
            <ul className="buttons">
                <li><a href="#0" className="btn_1 gray approve"><i className="fa fa-fw fa-check-circle-o"></i> Approve</a></li>
                <li><a href="#0" className="btn_1 gray delete"><i className="fa fa-fw fa-times-circle-o"></i> Cancel</a></li>
            </ul>
        </li>
    );
}

export default CardTransaction;