import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  // State to store products and pagination
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Number of products to display per page

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products'); // Adjust the endpoint URL accordingly
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to handle click event for previous button
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Function to handle click event for next button
  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(products.length / productsPerPage)));
  };

  // Calculate index of the last product to display
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate index of the first product to display
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Get current products to display
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="h-full items-center mb-8 bg-black-500">
        <img src="/images/logo.png" alt="Logo" className="h-20 w-20 mr-2" />
        <h2 className="text-3xl font-bold">User Dashboard</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Link to="/productsList" className="text-gray-700 font-bold hover:text-gray-900 py-2 px-4 border border-gray-400 rounded-md block mb-4">All Products</Link>
          

          {/* Add more navigation links as needed */}
        </div>
        <div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4">Add Product</button>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Product Name</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through current products and display each product */}
              {currentProducts.map((product) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            {/* Previous Button */}
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l-md mr-2" onClick={handlePrevClick} disabled={currentPage === 1}>Previous</button>
            {/* Next Button */}
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md ml-2" onClick={handleNextClick} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
