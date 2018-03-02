import React from 'react';
import '../Styles/Product.css';

const Product = ({name, price, imgUrl}) => {
    return(
        <div class="product-box">
            <img src={imgUrl} class="product-picture" />
            <h2 class='product-name'>{name}</h2>
            <h3 class='product-price'>{price}</h3> 
            <button class="add-to-cart-btn">Buy</button>
        </div>
    )
}

export default Product;