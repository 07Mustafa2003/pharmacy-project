import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'; // Import your React header component

ReactDOM.render(
    <React.StrictMode>
        <App/>
        {/* Add other components and routes here */}
    </React.StrictMode>,
    document.getElementById('app')
);
