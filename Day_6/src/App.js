import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Home' element={<Home/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
