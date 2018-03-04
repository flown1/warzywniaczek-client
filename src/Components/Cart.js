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
            <div class="cart">
                    <i class="fas fa-shopping-cart"></i>
                    Cart: {this.state.products.length}
            </div>
        )
    }
}