import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import './css/Order.css';

const Order = (props) => {
    const item = data.products[0];
    return (
        <div className="placeorder">
            <div className="placeorder-info">
                <div>
                    <h3>Shipping</h3>
                    <div>
                        415 Ellicott Loop, San Jose, CA, 95123
                    </div>
                </div>
                <div>
                    <h3>Payment</h3>
                    <div>
                        Payment Method: Paypal
                    </div>
                </div>
                <div>
                    <ul className="cart-list-container">
                        <li>
                            <h3>Shopping cart</h3>
                            <div>
                                price
                            </div>
                        </li>
                        <li key={item._id}>
                            <div className="cart-image">
                                <img src={item.image} alt="product" />
                            </div>
                            <div className="cart-name">
                                <div>
                                    <Link to={"/product/1"}>
                                        {item.name}
                                    </Link>
                                </div>
                                <div>
                                    Qty: 1
                                </div>
                            </div>
                            <div className="cart-price">
                                ${item.price}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="placeorder-action">
                <ul>
                    <li className="placeorder-actions-payment">
                    {/* <a href="/OrderConfirm">
                        <button className="button">Place the Order</button>
                    </a> */}
                    <Link to="./orderConfirm" className="button secondary text-center">Place the Order</Link>
                    </li>
                    <li>
                        <h3>Order Summary</h3>
                    </li>
                    <li>
                        <div>Items</div>
                        <div>${item.price}</div>
                    </li>
                    <li>
                        <div>Shipping</div>
                        <div>$10</div>
                    </li>
                    <li>
                        <div>Tax</div>
                        <div>${item.price*0.1}</div>
                    </li>
                    <li>
                        <div>Order Total</div>
                        <div>${item.price*1.1+10}</div>
                    </li>
                </ul>
            </div>

        </div>

    )
}
export default Order;