import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
    return(
        <nav id="top-menu">
            <a href="#" class="top-menu-button"><h3>Shopping</h3></a>
            <header className="App-header">
                <h1 className="App-title">Grocery Store</h1>
            </header>
            <a href="#" class="top-menu-button"><h3>About us</h3></a>
        </nav>
    )
}
export default Navbar;