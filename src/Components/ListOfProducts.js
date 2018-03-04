import React from 'react'
import Product from './Product'

export default class ListOfProducts extends React.Component {
    constructor(){
        super()
        this.state = {
            products: [{
                id:    0,
                name: 'Carrot',
                price: '123.12',
                imgUrl: "https://media.mercola.com/assets/images/foodfacts/carrot-nutrition-facts.jpg"
            },{
                id:    0,
                name: 'Beetroot',
                price: '64',
                imgUrl: "http://countryfruit.uy/238-thickbox_default/remolacha.jpg"
            }]
        }
    }
    componentDidMount(){
        //fetch for products
    }
    render(){
        return(
            this.state.products.map( (p) => {
                return (
                    <Product key={p.key}
                            name={p.name}
                            price={p.price}
                            imgUrl={p.imgUrl}
                    />
                );
            })
        );
           
    }
}