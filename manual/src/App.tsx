import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DetailPage from './pages/DetailPage';
import SubDetailPage from './pages/SubDetailPage';
import { menuData } from './data/menuData';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to={`/manual/${menuData[0].id}`} replace />} />
          <Route path="/manual/:categoryId" element={<DetailPage />} />
          <Route path="/manual/:categoryId/:itemId" element={<SubDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;