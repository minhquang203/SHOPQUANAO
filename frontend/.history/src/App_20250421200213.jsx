import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/components/Navbar.jsx';
import Homepage from '../src/pages/Homepage.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Homepage />
      </div>
    </Router>
  );
}

export default App;