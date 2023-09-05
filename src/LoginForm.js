import React, { useState } from 'react';
import AppleButton from './AppleButton';
import LoginButton from './LoginButton'; // If you created a separate LoginButton
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    id: '',
    role: 'user', // Default role
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="login-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleInputChange}
      />
      <select
        name="role"
        value={formData.role}
        onChange={handleInputChange}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="guest">Guest</option>
      </select>
      <LoginButton label="Login" onClick={handleLogin} />
    </div>
  );
};

export default LoginForm;
