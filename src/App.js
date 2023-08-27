import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home.jsx';
import Drafts from './pages/Drafts.jsx';
import Rejected from './pages/Rejected.jsx';
import PendingApproval from './pages/Pendingapproval.jsx';
import Approved from './pages/Approved.jsx';
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/pendingapproval" element={<PendingApproval />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/product" element={<Approved />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;