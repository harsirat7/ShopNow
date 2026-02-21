import React, { useState } from 'react';
import "../CSS/YourOrders.css";

export default function YourOrders() {
  const [orders] = useState([
    {
      id: '#ORD-001',
      date: '2025-02-10',
      items: 'Wireless Headphones, USB Type-C Cable',
      total: '$149.99',
      status: 'delivered'
    },
    {
      id: '#ORD-002',
      date: '2025-02-08',
      items: 'Smart Watch',
      total: '$299.99',
      status: 'in-transit'
    },
    {
      id: '#ORD-003',
      date: '2025-02-05',
      items: 'Phone Case, Screen Protector',
      total: '$45.99',
      status: 'delivered'
    },
    {
      id: '#ORD-004',
      date: '2025-02-01',
      items: 'Laptop Stand, External SSD',
      total: '$189.99',
      status: 'pending'
    }
  ]);

  const getStatusClass = (status) => {
    switch(status) {
      case 'delivered':
        return 'statusDelivered';
      case 'in-transit':
        return 'statusInTransit';
      case 'pending':
        return 'statusPending';
      default:
        return '';
    }
  };

  const getStatusLabel = (status) => {
    switch(status) {
      case 'delivered':
        return 'Delivered';
      case 'in-transit':
        return 'In Transit';
      case 'pending':
        return 'Pending';
      default:
        return status;
    }
  };

  return (
    <React.Fragment>
      <div className="YourOrdersMainContainer">
        {/* Header Section */}
        <div className="ordersHeaderSection">
          <h2 className="ordersPageTitle">Your Orders</h2>
        </div>

        {/* Orders List */}
        <div className="ordersListContainer">
          {orders.map((order) => (
            <div key={order.id} className="orderCard">
              <div className="orderCardHeader">
                <div className="orderInfo">
                  <h3 className="orderId">{order.id}</h3>
                  <p className="orderDate">Ordered: {order.date}</p>
                </div>
                <span className={`orderStatus ${getStatusClass(order.status)}`}>
                  {getStatusLabel(order.status)}
                </span>
              </div>

              <div className="orderCardContent">
                <div className="orderDetails">
                  <div className="detailItem">
                    <label className="detailLabel">Items</label>
                    <p className="detailValue">{order.items}</p>
                  </div>
                  <div className="detailItem">
                    <label className="detailLabel">Total</label>
                    <p className="detailValueHighlight">{order.total}</p>
                  </div>
                </div>
              </div>

              <div className="orderCardActions">
                <button className="actionButton primaryAction">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

