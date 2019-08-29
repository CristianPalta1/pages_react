import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Carousel from './components/Carousel';
import Badge from './components/Badge';
import Forms from './components/Forms';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Badge></Badge>
      
    </div>
  );
}

export default App;
