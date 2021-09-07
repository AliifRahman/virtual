import React from 'react';
import Breadcrumbs from '../../components/seller-section/Breadcrumbs';
import CardMessages from '../../components/seller-section/CardMessages';

function Pesan(props) {
    return (
        <div>
            <Breadcrumbs title="Pesan" />
            <div className="box_general">
                <h4>Pesan</h4>
                <div className="list_general">
                    <ul>
                        <CardMessages />
                        <CardMessages />
                        <CardMessages />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pesan;