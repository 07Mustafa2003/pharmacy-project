import React from 'react';
import SearchBar from '../common/SearchBar';
import NewDrugs from '../Products/NewProducts';

const Home = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="py-6">
                {/* SearchBar */}
                <div className="max-w-md mx-auto">
                    <SearchBar />
                </div>
                
                {/* New Products */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <NewDrugs />
                </div>
            </div>
        </div>
    );
};

export default Home;
