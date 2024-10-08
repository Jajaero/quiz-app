// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'; // Add your CSS styles here
import Dashboard from './components/Dashboard';
import QuizQuestions from './components/QuizQuestions';

const App = () => {
return (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Classiz</h1>
      </header>
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
    <Routes>
      <Route path="/quiz" element={<QuizQuestions />} />
    </Routes>
  </Router>
);
};

export default App;