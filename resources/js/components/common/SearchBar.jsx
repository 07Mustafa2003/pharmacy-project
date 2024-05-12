import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchElement, setSearchElement] = useState('all'); // Default to search all elements

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchElement = (element) => {
    setSearchElement(element);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm, searchElement); // Pass both search term and search element to the parent component
  };

  return (
    <div>     {/* Buttons to specify search element */}
      <div className="ml-4 hidden md:flex"> {/* Hide buttons on small screens */}
        <button
          type="button"
          className={`px-4 py-2 border rounded-md mr-2 ${searchElement === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => handleSearchElement('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`px-4 py-2 border rounded-md ${searchElement === 'title' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => handleSearchElement('title')}
        >
          Title
        </button>
        <button
          type="button"
          className={`px-4 py-2 border rounded-md ${searchElement === 'author' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => handleSearchElement('author')}
        >
          Author
        </button>
        <button
          type="button"
          className={`px-4 py-2 border rounded-md ${searchElement === 'Starts with' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => handleSearchElement('Starts with')}
        >
          Starts with
        </button>
        <button
          type="button"
          className={`px-4 py-2 border rounded-md ${searchElement === 'laboratory' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => handleSearchElement('laboratory')}
        >
          laboratory
        </button>
        <button
          type="button"
          className={`px-4 py-2 border rounded-md ${searchElement === 'contain' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => handleSearchElement('contain')}
        >
          contain
        </button>
        <button
          type="button"
          className={`px-4 py-2 border rounded-md ${searchElement === 'Active Substance' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => handleSearchElement('Active substance')}
        >
          Active Substance
        </button>
    </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative  items-center w-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
        </div>

        <button
          type="submit"
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>

  );
};

export default SearchBar;
