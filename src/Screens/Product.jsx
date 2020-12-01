import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import './css/Product.css';

const Product = (props) => {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id);
    return (
    <div>
        <div className = "back-to-result">
            <Link to = "/">Back to result</Link>
        </div>
        <div className = "details">
            <div className = "details-image">
                <img src = {product.image} alt = "product"></img>
            </div>
            <div className = "details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <a href="#reviews">
                    <li>
                        {product.rating} Stars <span>{product.numReviews+' Reviews'}</span>
                    </li>
                    </a>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    <li>
                        Description: FREE Shipping
                        {product.descrption}
                    </li>
                </ul>
            </div>
            <div className = "details-action">
                <ul>
                    <li>
                        Price: ${product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                    </li>
                    <li>
                        <a href="/cart">
                            <button className="button primary">Add to Cart</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Product;