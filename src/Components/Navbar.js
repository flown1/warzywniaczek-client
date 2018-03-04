import React from 'react';
import '../Styles/Navbar.css';

import Cart from './Cart.js';
import Login from './Login.js';

const Navbar = () => {
    return(
        <nav id="top-menu">
            <header className="App-header">
                <h1 className="App-title">Grocery Store</h1>
                <div class='side-box'>Do Grocery<br/>Online</div>
            </header>
            <div class="menu-tabs">
                <a href="#" class="top-menu-button"><h3>Shopping</h3></a>
                <a href="#" class="top-menu-button"><h3>About us</h3></a>
            </div>
            <div class="user-box">
                <Cart />
                <Login />
            </div>
        </nav>
    )
}
export default Navbar;