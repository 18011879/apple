import React, { useState } from 'react';
import './LoginForm.css'; // Make sure you have a LoginForm.css with the styles

const LoginForm = () => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    id: '',
    country: 'United States',
  });

  // Handler for input changes to update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for the login button click
  const handleLogin = () => {
    // Do something with formData, like sending it to a server
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="login-form">
      {/* Image from the public folder */}
      <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Your Image" />

      {/* Name Field */}
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      
      <label htmlFor="id">ID</label>
      <input
        type="text"
        id="id"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleInputChange}
      />
      
      <label htmlFor="country">Country</label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleInputChange}
      >
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Australia">Australia</option>
        {/* Add more countries as needed */}
      </select>
      
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
