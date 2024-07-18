import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../assets/logo.png';
import dashboardIcon from '../assets/dashboard-icon.svg';
import ordersIcon from '../assets/orders-icon.svg';
import customersIcon from '../assets/customers-icon.svg';
import inventoryIcon from '../assets/inventory-icon.svg';
import conversationsIcon from '../assets/conversations-icon.svg';
import settingsIcon from '../assets/settings-icon.svg';
import contactSupportIcon from '../assets/contact-support-icon.svg';
import freeGiftIcon from '../assets/free-gift-icon.svg';
import upgradeIcon from '../assets/upgrade-icon.svg';
import logoutIcon from '../assets/logout-icon.svg';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
    >
      <div className="logo">
        <img src={logo} alt="Metrix" />
        <h1>Metrix</h1>
      </div>
      <ul className="sidebar-list">
        <li className={activeItem === 'Dashboard' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Dashboard')}>
            <img src={dashboardIcon} alt="Dashboard" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className={activeItem === 'Orders' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Orders')}>
            <img src={ordersIcon} alt="Orders" />
            <span>Orders <span className="badge">3</span></span>
          </a>
        </li>
        <li className={activeItem === 'Customers' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Customers')}>
            <img src={customersIcon} alt="Customers" />
            <span>Customers</span>
          </a>
        </li>
        <li className={activeItem === 'Inventory' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Inventory')}>
            <img src={inventoryIcon} alt="Inventory" />
            <span>Inventory</span>
          </a>
        </li>
        <li className={activeItem === 'Conversations' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Conversations')}>
            <img src={conversationsIcon} alt="Conversations" />
            <span>Conversations <span className="badge">16</span></span>
          </a>
        </li>
        <li className={activeItem === 'Settings' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Settings')}>
            <img src={settingsIcon} alt="Settings" />
            <span>Settings</span>
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <a href="#" className="sidebar-link0">
          <img src={contactSupportIcon} alt="Contact Support" />
          <span>Contact Support</span>
        </a>
        <a href="#" className="sidebar-link1">
          <img src={freeGiftIcon} alt="Free Gift" />
          <span>Free Gift Awaits You!</span>
        </a>
        <a href="#" className="sidebar-link2"> <span>Upgrade your account </span>
          <img src={upgradeIcon} alt="Upgrade" />
         
        </a>
        <a href="#" className="sidebar-link">
          <img src={logoutIcon} alt="Logout" />
          <span>Logout</span>
        </a>
      </div>
      <button
        className="sidebar-toggle"
        onClick={handleToggleSidebar}
      >
        {isSidebarOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default Sidebar;