import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewDrugs = () => {
    // State to store the fetched data
    const [newDrugs, setNewDrugs] = useState([]);
    // State to manage loading state
    const [loading, setLoading] = useState(true);
    // State to manage error state
    const [error, setError] = useState('');

    // Function to fetch new drugs from the API
    const fetchNewDrugs = async () => {
        try {
            const response = await axios.get('http://localhost:8000/products');
            setNewDrugs(response.data);
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch new drugs');
            setLoading(false);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchNewDrugs();
    }, []);

    // Render loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render error state
    if (error) {
        return <div>{error}</div>;
    }

    // Render fetched data
    return (
        <div>
            <h2>New Drugs</h2>
            <ul>
                {newDrugs.map(drug => (
                    <li key={drug.id}><h3>{drug.name}</h3></li>
                ))}
            </ul>
        </div>
    );
};

export default NewDrugs;
