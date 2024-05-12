import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      const userData = response.data; // Assuming the response contains user data
      onLogin(userData);
    } catch (error) {
      setError('Invalid email or password. Please try again.'); // Handle login error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-64 p-2 mb-4 border border-gray-300 rounded-md"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-64 p-2 mb-4 border border-gray-300 rounded-md"
        required
      />
      {error && <p className="text-red-500">{error}</p>} {/* Display error message if login fails */}
      <button type="submit" className="w-64 p-2 bg-blue-500 text-white rounded-md">Login</button>
    </form>
  );
};

export default Login;
