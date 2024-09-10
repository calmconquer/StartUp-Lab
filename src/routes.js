// src/routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const Routess = () => {
    return (
        <Router>
             <Routes>
                <Route path="/" element={<LandingPage />}  />
                {/* Add all routes here */}
                </Routes>
        </Router>
    );
};

export default Routess;
