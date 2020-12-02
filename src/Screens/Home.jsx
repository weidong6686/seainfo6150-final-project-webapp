import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import './css/Home.css';
import { Link } from "react-router-dom";

const Home = (props) => {

  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("https://demo6790190.mockable.io/shopeemart");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    
    <div>
      <img className="img" src="https://i.ibb.co/K2wFwdB/ads.png" alt="Ads" />
      <ul className="products">
        {
          fetchedData.products.map(product=>
            <li key={product._id}>
              <div className="product">
                <img className="product-image" src={product.image} alt="product" />
                <div className="product-name">
                  {/* <a href={'/product/'+product._id}>{product.name}</a> */}
                  <Link to={'/product/'+product._id} >{product.name}</Link>
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

export default Home;