import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/Header.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './common/Footer.jsx';

import ProductsPage from './pages/products.jsx';
import Login from './Auth/LoginForm.jsx';
import Register from './Auth/RegisterForm.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import AddProduct from './Products/createProduct.jsx';

const App = () => {
    return (
        <Router>
            <div>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductsPage />} /> {/* Use the correct component name */}
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path='/dashboard/AddProduct' element={<AddProduct/>}></Route>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
