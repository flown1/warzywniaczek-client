import React from 'react';
import '../Styles/Product.css';

const Product = ({name, price, imgUrl}) => {
    return(
        <div class="product-box">
            <div class="box-top">
                <img src={imgUrl} class="product-picture" />
                <h2 class='product-name'>{name}</h2>
            </div>
            <hr/>
            <div class="product-bottom">
                <h3 class='product-price'>${price}</h3> 
                <div class="add-to-cart-btn">Buy</div>
            </div>
        </div>
    )
}

export default Product;