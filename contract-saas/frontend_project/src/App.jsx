import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Query from './pages/Query';

function App() {
  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-6">
        <Link to="/">Dashboard</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/query">Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/query" element={<Query />} />
      </Routes>
    </div>
  );
}

export default App;