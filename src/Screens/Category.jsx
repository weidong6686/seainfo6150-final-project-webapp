import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
// import './css/Home.css';
import './css/Category.css';

const Category = (props) => {
  const targetCategory = props.category;
  const list = data.products.filter(x=> x.category === targetCategory);
  return ( 
  <div>
    <h3 className="category">Categories - {props.category}</h3>
    <ul className="products">
      {
        list.map(product =>
          <li key={product._id}>
            <div className="product">
              <img className="product-image" src={product.image} alt="product" />
              <div className="product-name">
                <a href="product.html">{product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
            </div>
          </li>
        )
      }
    </ul>
  </div>
  );
}

export default Category;