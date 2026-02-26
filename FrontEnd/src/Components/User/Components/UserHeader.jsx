import React from 'react'
import './CSS/UserHeader.css';
import { Link } from 'react-router';

export default function UserHeader() {
  return (
    <React.Fragment>
      <div className="userHeaderMainContainer">
        <ul className="userHeaderList">
          <li><Link className="userHeaderListLinks" to="/userDashBoard/Profile">Profile</Link></li>
          <li><Link className="userHeaderListLinks" to="/userDashBoard/orders">Your Orders</Link></li>
          <li><Link className="userHeaderListLinks" to="/userDashBoard/sellProduct">Sell Your Product</Link></li>
          <li><Link className="userHeaderListLinks" to="/userDashBoard/Inventory">Your Inventory</Link></li>
          <li><Link className="userHeaderListLinks" to="/">Log Out</Link></li>
        </ul>
      </div>
    </React.Fragment>
  )
}
