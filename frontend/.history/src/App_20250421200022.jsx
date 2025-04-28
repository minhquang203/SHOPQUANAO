import React from 'react';
import Homepage from '../src/pages/Homepage.jsx';
import Navbar from '../src/components/Navbar.jsx';



function App() {
  return (
    <Navbar />
    <Homepage />  // Chỉ hiển thị Homepage
  );
}

export default App;
