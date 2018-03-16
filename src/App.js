import React, { Component } from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import { connect } from 'react-redux'

import ListOfProducts from './Components/ListOfProducts'
import Navbar from './Components/Navbar'
import { addProduct } from "./Redux/productActions"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="flex-wrapper list-of-products-wrapper">
          <ListOfProducts/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products
});
const mapDispatchToProps = (dispatch) => {
 return {addNewProduct: (name) => dispatch(addProduct(name))}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


//ten container będzie raczej w listOfProducts