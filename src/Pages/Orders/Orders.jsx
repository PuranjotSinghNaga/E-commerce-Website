import React, { useState } from "react";
import "./Orders.css";

function Orders() {
  const OrderBox = () => {
    // Assuming orders is an array of order objects
    return (
      <>
        {orders.map((order) => (
          <li key={order.id}>
            <div>
              <p>ORDER PLACED</p>
              <p>{order.date}</p>
            </div>
            <div>
              <p>TOTAL</p>
              <p>{order.total}</p>
            </div>
            <div>
              <p>SHIP TO</p>
              <p>{order.shippingAddress}</p>
            </div>
            <div>
              <p>ORDER #</p>
              <p>{order.orderNumber}</p>
            </div>
            <button>View Order details</button>
          </li>
        ))}
      </>
    );
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [orders, ] = useState([]);

  const handleSearch = () => {
    // Perform search logic here based on the searchQuery
  };

  return (
    <div>
      <div className="head">
        <h2>Your Orders</h2>
        <input
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>{OrderBox()}</ul>
      </div>
    </div>
  );
}

export default Orders;
