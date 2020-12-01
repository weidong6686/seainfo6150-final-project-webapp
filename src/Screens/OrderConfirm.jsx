import React from 'react'
import './css/OrderConfirm.css'
const OrderConfirm = (props) => {
    return (
        <div>
            <div className="content">
                <h2 className="title">Congratulations! Your order has been placed</h2>
                <p>Order Number: 14232876151</p>
                <p>Order Status: Confirmed</p>
            </div>
        </div>
    )
}

export default OrderConfirm