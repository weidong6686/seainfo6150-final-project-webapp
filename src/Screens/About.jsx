import React from 'react'
import './css/About.css'
const About = (props) => {
    return (
        <div>
            <img className="img" src="/images/About.png" alt="AboutUs" />
            <div className="content">
                <h2 className="title">About Shopee Mart</h2>
                <h2>Our History</h2>
                <p>Launched in 2015, it is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support. We believe online shopping should be accessible, easy and enjoyable. This is the vision Shopee aspires to deliver on the platform, every single day.</p>
                
                <h2>Our Purpose</h2>
                <p>We believe in the transformative power of technology and want to change the world for the better by providing a platform to connect buyers and sellers within one community.</p>
                
                <h2>Our Positioning</h2>
                <p>To Internet users across the region, Shopee offers a one-stop online shopping experience that provides a wide selection of products, a social community for exploration, and seamless fulfilment services.</p>
                
                <h2>Our Personality</h2>
                <p>To define who we are - how we talk, behave or react to any given situation - in essence, we are Simple, Happy and Together. These key attributes are visible at every step of the Shopee journey.</p>
            </div>
        </div>
    )
}

export default About