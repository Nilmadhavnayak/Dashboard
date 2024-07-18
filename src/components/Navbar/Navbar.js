import React, { useState } from 'react';
import bellIcon from '../assets/bell-icon.png';
import userIcon from '../assets/profile.png';
import './Navbar.css';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('Nanny\'s Shop');
  const options = ['Nanny\'s Shop', 'Option 2', 'Option 3'];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Dashboard</h1>
      </div>
      <div className="navbar-right">
        <select value={selectedOption} onChange={handleSelectChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <img src={bellIcon} alt="Bell Icon" className="icon bell-icon" />
        <img src={userIcon} alt="User Icon" className="icon user-icon" />
      </div>
    </div>
  );
};

export default Navbar;
