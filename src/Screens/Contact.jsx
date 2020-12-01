import React from 'react'; 
import './css/About.css';
const Contact = (props) => {
    return (
        <div>
            <img className="img-contact" src="https://i.ibb.co/LJXJnQC/Contact.png" alt="ContactUs" />
            <div className="content">
                <h2>Phone:</h2>
                <p>Phone call at +1 620 616 6610 (Monday to Sunday - 8.00am until 10:00pm) including Public Holidays.</p>
                
                <h2>Email:</h2>
                <p>Email to <b>shopeeservice@shopee.com</b>, we will reply you in 24 hours.</p>
            </div>
        </div>
    )
}

export default Contact