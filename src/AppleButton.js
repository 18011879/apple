import React, { useState } from 'react';
import './AppleButton.css'; 

const AppleButton = ({ label }) => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button 
      className={`apple-button ${isActive ? 'active' : ''}`}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
};

export default AppleButton;
