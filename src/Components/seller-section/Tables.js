import React from 'react';

function Tables(props) {
    return (
        <div>
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fa fa-table"></i> Data Penyewa</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Perusahaan</th>
                                    <th>Ruangan</th>
                                    <th>Jumlah Ruangan</th>
                                    <th>Mulai Sewa</th>
                                    <th>Total Bayar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>A. Yani</td>
                                    <td>2</td>
                                    <td>21 Agustus 2021 </td>
                                    <td>Rp. 5.000.000</td>
                                </tr>
                                <tr>
                                    <td>Aram</td>
                                    <td>PT Maju Bersama</td>
                                    <td>A. Diponegoro</td>
                                    <td>3</td>
                                    <td>2 September 2021 </td>
                                    <td>Rp. 7.200.000</td>
                                </tr>
                                <tr>
                                    <td>Arandi saklama</td>
                                    <td>Langgeng jaya</td>
                                    <td>Panglima Sudirman</td>
                                    <td>1</td>
                                    <td>15 Januari 2021 </td>
                                    <td>Rp. 41.000.000</td>
                                </tr>
                                <tr>
                                    <td>Proxila Synderen</td>
                                    <td>Going Upwards</td>
                                    <td>Keputih</td>
                                    <td>5</td>
                                    <td>30 Mei 2021 </td>
                                    <td>Rp. 120.000.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        </div>
    );
}

export default Tables;