import React from 'react';
import logo from './logo.svg';
import './App.css';

import MenuBar from './Components/MenuBar/MenuBar';
import Home from './Pages/Home/Home';
import LayoutsList from './Pages/LayoutsList/LayoutsList';


function App() {
  return (
    <div className="App">
      <MenuBar />
      <Home />
      <LayoutsList />
    </div>
  );
}

export default App;
