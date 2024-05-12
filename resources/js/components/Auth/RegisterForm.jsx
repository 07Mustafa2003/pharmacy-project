import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('/api/register', { name, email, password });
      const userData = response.data; // Assuming the response contains user data
      onRegister(userData);
    } catch (error) {
      setError('Registration failed. Please try again.'); // Handle registration error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-64 p-2 mb-4 border border-gray-300 rounded-md"
        required
      />
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-64 p-2 mb-4 border border-gray-300 rounded-md"
        required
      />
      {error && <p className="text-red-500">{error}</p>} {/* Display error message if registration fails */}
      <button type="submit" className="w-64 p-2 bg-blue-500 text-white rounded-md">Register</button>
    </form>
  );
};

export default Register;
