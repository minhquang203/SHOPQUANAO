import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import Homepage from './pages/Homepage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';

function App() {
  return (

    <AuthProvider>
          <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;