import React from 'react';
import '../Styles/Product.css';

const Product = ({name, price, imgUrl}) => {
    return(
        <div className="product-box">
            <div className="box-top">
                <img src={imgUrl} className="product-picture" />
                <h2 className='product-name'>{name}</h2>
            </div>
            <hr/>
            <div className="product-bottom">
                <h3 className='product-price'>${price}</h3> 
                <div className="add-to-cart-btn">Buy</div>
            </div>
        </div>
    )
}

export default Product;