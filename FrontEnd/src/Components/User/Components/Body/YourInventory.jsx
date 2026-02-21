import React, { useState } from 'react';
import "../CSS/YourInventory.css";

export default function YourInventory() {
  const [inventoryItems] = useState([
    {
      id: 'INV-001',
      productName: 'Wireless Headphones',
      price: '$79.99',
      quantity: 5,
      sold: 12
    },
    {
      id: 'INV-002',
      productName: 'USB Type-C Cable',
      price: '$15.99',
      quantity: 24,
      sold: 38
    },
    {
      id: 'INV-003',
      productName: 'Phone Case Blue',
      price: '$12.99',
      quantity: 0,
      sold: 15
    },
    {
      id: 'INV-004',
      productName: 'Laptop Stand',
      price: '$45.99',
      quantity: 3,
      sold: 5
    }
  ]);

  return (
    <React.Fragment>
      <div className="YourInventoryMainContainer">
        {/* Header Section */}
        <div className="inventoryHeaderSection">
          <h2 className="inventoryPageTitle">Your Inventory</h2>
        </div>

        {/* Inventory Table */}
        <div className="inventoryTableContainer">
          <table className="inventoryTable">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sold</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="productNameCell">
                      <span className="productName">{item.productName}</span>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <span className={item.quantity === 0 ? 'outOfStock' : ''}>
                      {item.quantity}
                    </span>
                  </td>
                  <td>{item.sold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}
