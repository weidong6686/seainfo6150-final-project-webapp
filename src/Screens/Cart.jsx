import React from 'react';
import './css/Cart.css';
import { Link } from 'react-router-dom';
import data from '../data';

const Cart = (props) => {
    const item = data.products[0];
    return (
    <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>Shopping Cart</h3>
                </li>
                <li>Price</li>
                <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item._id}>
                      {item.name}
                    </Link>
                  </div>
                  <div>
                    Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                    <button>
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  ${item.price}
                </div>
              </li>
            </ul>
        </div>
        <div className="cart-action">
            <h3>
                Subtotal ( 1 items) : $ {item.price}
            </h3>
            <Link to="/order" className="button-cart">Proceed to Checkout</Link>
        </div>

    </div>

    );
};

export default Cart;