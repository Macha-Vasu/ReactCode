import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // You'll need to create this CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to validate credentials
    if (username === 'admin' && password === 'password') {
      // Successful login
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>HR Portal Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;