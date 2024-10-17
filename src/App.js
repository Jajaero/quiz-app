import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'; // Add your CSS styles here
import Dashboard from './components/Dashboard';
import QuizSetup from './components/QuizSetup';

const App = () => {
  return (
    <Router>
      <div className="App">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/quizsetup" element={<QuizSetup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;