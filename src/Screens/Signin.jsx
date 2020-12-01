import React from 'react';
import { Link } from 'react-router-dom';
import './css/Signin.css';

const Signin = (props) => {

    return (<div className="form">
    <form >
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email">
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password">
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Sign In</button>
        </li>
        <li>
          New to Shopee Mart?
        </li>
        <li>
          <Link to="./Signup" className="button secondary text-center">Create your Shopee Mart account</Link>
        </li>
      </ul>
    </form>
  </div>

    )


}
export default Signin;