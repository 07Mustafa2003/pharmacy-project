import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

import Product from '../Products/ShowProduct.jsx';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState('');

    useEffect(() => {
        // Fetch products data from API using Axios
        axios.get('http://localhost:8000/products')
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data); // Initially set filtered products to all products
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    // Function to filter products based on the starting letter of their names
    const filterProductsByLetter = (letter) => {
        setSelectedLetter(letter);
        const filtered = products.filter(product => product.name.startsWith(letter));
        setFilteredProducts(filtered);
    };

    return (
        <div className="container mx-auto">

            <div className=" justify-center space-x-4 mb-4 flex-wrap">
                {/* Create buttons for each row */}
                {Array.from(Array(4)).map((_, rowIndex) => (
                    <div key={rowIndex} className=" mb-2">
                        {Array.from(Array(6)).map((_, colIndex) => {
                            const index = rowIndex * 6 + colIndex;
                            const letter = String.fromCharCode(65 + index);
                            return (
                                index < 26 && (
                                    <button
                                        key={index}
                                        className={`px-3 py-2 rounded-md focus:outline-none ${selectedLetter === letter ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                        onClick={() => filterProductsByLetter(letter)}
                                    >
                                        {letter}
                                    </button>
                                )
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
