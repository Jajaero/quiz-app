// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/dashboard_style.css'; // Ensure this path matches your project structure

const Dashboard = () => {
const navigate = useNavigate();

const handleCreateActivityClick = (e) => {
e.preventDefault();
navigate('/quiz');
};

return (
<div className="container">
    <nav className="sidebar">
    <h1 className="logo">class<span className="colored">iz.</span></h1>
    <h2 className="section-title">MENU</h2>
    <ul className="menu">
        <li><a href="#" className="menu-item">Home</a></li>
        <li><a href="#" className="menu-item">Classes</a></li>
        <li><a href="#" className="menu-item">Create Class</a></li>
        <li><a href="#" onClick={handleCreateActivityClick} className="menu-item">Create Activity</a></li>
        <li>
        <label className="checkbox-container">
            <input type="checkbox" className="checkbox" />
        </label>
        </li>
    </ul>
    </nav>
</div>
);
};

export default Dashboard;