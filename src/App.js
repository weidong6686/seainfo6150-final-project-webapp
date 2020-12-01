import React, { useEffect, useState } from "react";
import {Route, Link } from "react-router-dom";
import './App.css';
import data from './data';
import Home from './Screens/Home';
import Product from './Screens/Product';
import Category from "./Screens/Category";
import Cart from './Screens/Cart';
import Order from './Screens/Order';
import OrderConfirm from './Screens/OrderConfirm';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';
import About from './Screens/About';
import Contact from './Screens/Contact';
import ReturnPolicy from './Screens/ReturnPolicy';
import Help from './Screens/Help';
import Error from "./Screens/Error";

// here is some external content. look at the /baz r  oute below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {


  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <Link to="/">Shopee Mart</Link>
        </div>
        <ul className="filter">
        <li>
          <form>
            <input name="searchKeyword"/>
            <button type="submit">Search</button>
          </form>
        </li>
      </ul>
        <div className="header-links">
          <Link to="/Cart">Cart</Link>
          <Link to="/Signin">Sign In</Link>
        </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul className="categories">
          <li>
            <Link to="/Clothes">Clothes</Link>
          </li>
          <li>
            <Link to="/Foods">Foods</Link>
          </li>
          <li>
            <Link to="/Electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
      </aside>

      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" exact component={Product} />
        <Route exact path="/Foods"><Category category="foods"/> </Route>
        <Route exact path="/Clothes"><Category category="clothes"/> </Route>
        <Route exact path="/Electronics"><Category category="electronics"/> </Route>
        <Route exact path="/Home"><Category category="home"/> </Route>
        <Route path="/Cart" exact component={Cart} />
        <Route path="/Order" exact component={Order} />
        <Route path="/OrderConfirm" exact component={OrderConfirm} />
        <Route path="/Signin" exact component={Signin} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/ReturnPolicy" exact component={ReturnPolicy} />
        <Route path="/Help" exact component={Help} />
        {/* <Route component={Error} /> */}
      </switch>

      <footer className="footer">
        <Link to="/About" className="footer-text">About Us</Link>
        <Link to="/Contact" className="footer-text">Contact Us</Link>
        <Link to="/ReturnPolicy" className="footer-text">Return Policy</Link>
        <Link to="/Help" className="footer-text">Help</Link>
      </footer>
    </div>
  );
}

export default App;
