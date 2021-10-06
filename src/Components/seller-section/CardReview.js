import React from 'react';

function CardReview(props) {
    return (
        <li>
            <span>12 Juli 2021</span>
            <span class="rating"><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star"></i></span>
            <figure><img src="assets/seller-section/img/item_1.jpg" alt="" /></figure>
            <h4>Ruangan Luxury <small>oleh Aram</small></h4>

            <p>Sangat merekomendasikan tempat ini, selain harga yang murah juga bisa diakses 24 jam</p>
            <p class="inline-popups"><a href="#modal-reply" data-effect="mfp-zoom-in" class="btn_1 gray"><i class="fa fa-fw fa-reply"></i> Reply to this review</a></p>
        </li>
    );
}

export default CardReview;