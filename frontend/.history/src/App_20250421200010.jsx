import React from 'react';
import Homepage from '../src/pages/Homepage.jsx';
import Navbar from '../components/Navbar';



function App() {
  return (
    <Navbar />
    <Homepage />  // Chỉ hiển thị Homepage
  );
}

export default App;
