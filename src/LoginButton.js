import React from 'react';
import './LoginButton.css';

const LoginButton = ({ label, onClick }) => {
  return (
    <button className="login-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default LoginButton;
