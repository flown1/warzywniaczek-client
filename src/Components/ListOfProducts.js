import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class ListOfProducts extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    shouldComponentUpdate(prev, next){
        console.log(prev);
        console.log(next);
    }
    render(){
        return(
            this.props.products.map( (p) => {
                return (
                    <Product key={p.id}
                            name={p.name}
                            price={p.price}
                            imgUrl={p.imgUrl}
                    />
                    // <div>{this.props.info}</div>
                );
            })
        );     
    }
}

const mapStateToProps = (state) => {
    console.log(state.info);
    return{
        info: state.info,
        products: state.products
    };
  };
  
  export default connect(mapStateToProps)(ListOfProducts);
  