import React from 'react';

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    render(){
        return(
            <div className="cart">
                    <i className="fas fa-shopping-cart"></i>
                    Cart: <div className="cart-counter">{this.state.products.length}</div>
            </div>
        )
    }
}