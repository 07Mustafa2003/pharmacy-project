import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto py-6 flex flex-wrap justify-between items-center">
                <div className="w-full md:w-auto mb-4 md:mb-0">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Pharmacy App. All rights reserved.</p>
                </div>
                <div className="w-full md:w-auto mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
                    <ul className="text-sm">
                        <li><Link to="/" className="text-gray-300 hover:text-gray-200">Contact Us</Link></li>
                        <li><Link to="/" className="text-gray-300 hover:text-gray-200">My Account</Link></li>
                        <li><Link to="/" className="text-gray-300 hover:text-gray-200">Terms & Conditions</Link></li>
                        <li><Link to="/" className="text-gray-300 hover:text-gray-200">Media Enquiries</Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Shop with Us</h3>
                    <ul className="text-sm">
                        <li><Link to="/" className="text-gray-300 hover:text-gray-200">Online Doctor</Link></li>
                        <li><Link to="/" className="text-gray-300 hover:text-gray-200">About Us</Link></li>
                        <li><Link to="/" className="text-gray-300 hover:text-gray-200">Contact Us</Link></li>
                        {/* Add more links here */}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
