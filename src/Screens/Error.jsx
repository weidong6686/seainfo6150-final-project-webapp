import React from 'react';
import { Link } from "react-router-dom";
import styles from './css/Error.css';

const Error = () => {
    return (
        <div className={styles.container}>
            <h1>ERROR 404 - Page Not Found</h1>
            <p>We're sorry that you requested page could not be found. Please go back to the 
                <Link className={styles.link} to={"/"}> Home page </Link> 
                or you can contact us at <a className={styles.link} href="mailto:shopeeservice@shopee.com">shopeeservice@shopee.com</a>
            <img className={styles.image} src="https://i.ibb.co/kXB0hxJ/404.jpg" alt="404 warning" />
            </p>
        </div>
    )
}

export default Error