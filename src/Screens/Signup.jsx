import React from 'react';
import { Link } from 'react-router-dom';

const Signup = (props) => {

    // const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    return (<div className="form">
    <form>
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name">
          </input>
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
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword">
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>
        <li>
          Already have an account?
          <Link to="./Signin" className="button secondary text-center" >Sign In your Shopee Mart account</Link>
        </li>

      </ul>
    </form>
  </div>

    )


}
export default Signup;