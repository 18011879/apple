import React from 'react';
import AppleButton from './AppleButton';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="button-container">
          <AppleButton label="Toggle Me" />
        </div>
        <div className="form-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
