import React from 'react';
import Breadcrumbs from '../../components/seller-section/Breadcrumbs';
import Tables from '../../components/seller-section/Tables';

function DataTransaksi(props) {
    return (
        <div>
            <Breadcrumbs title="Data Transaksi"/>
            <Tables />
        </div>
    );
}

export default DataTransaksi;