import React from 'react';
import { render } from "react-dom";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Category from './pages/CategoryDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = document.getElementById("root");
render(
  <Router>
    <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category/:categoryName" element={<Category />} />
        </Routes>
  </Router>,
  root
);
