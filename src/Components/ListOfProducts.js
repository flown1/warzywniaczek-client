import React from 'react'
import Product from './Product'

export default class ListOfProducts extends React.Component {
    constructor(){
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        //fetch for products
    }
    render(){
        return(
            <Product name="Carrot"
                     price='123.12'
                     imgUrl="asdas"
            />
        )
    }
}